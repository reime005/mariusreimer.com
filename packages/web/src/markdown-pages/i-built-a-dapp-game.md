---
title: "I built a DApp Game"
date: "2019-03-17"
description: "DApps are decentralized applications, that run without having a centralized system underneath it. In an application with a centralized system, the system can tell you that what you do is okay or not."
slug: "i-built-a-dapp-game"
categories:
  - "blog"
tags:
  - "javascript"
  - "solidity"
  - "typescript"
cover_image: "https://mariusreimer.com/images/annie-spratt-746981-unsplash-copy.jpg"
---

DApps are decentralized applications, that run without having a centralized system underneath it. In an application with a centralized system, the system can tell you that what you do is okay or not. In an application with a decentralized system, no single system can decide if what you do is okay or not, you have to reach a consensus in many peers of the network.

Some months ago I started building a DApp. So I researched an experimented with simple contracts on a 'private' (local) simulated blockchain. Then I designed the system's architecture and had some struggles, which I described in [this article](https://mariusreimer.com/2018/08/i-started-building-a-dapp-these-were-my-architectural-difficulties/). In general, if you create a smart contract, you not only have to make sure that the code is secure, but also should think about that the code you have written gives people the possibility to leave its state. What I mean about that is the following:

1. User A creates a game via smart contract / DApp and leaves a prize for when the game is lost.
2. User B joins the game and has to pay the same prize. But what if no player will ever join the game? So it has to be cancelable, eventually after a timeout so that users have time to join.
3. After some time User A realizes that the game is lost and the price would definitely go to the other User. Then they decide to stop playing, because it costs 'money' and time or one of the Users wants no one to get the prize. So there has to be a 'giveUp' and 'user did not move after a timeout' function.

These are just some things that are probably non existing in a centralized application. So I decided to create a decentralized game based on the famous 'Connect Four'. It is [open source](https://github.com/reime005/preact-fourconnect).

Side note and disclaimer: Things change very and by the time I wrote this contract, things may have become outdated already. That is the reason why I don't want to go too much into the code here, but mainly share my experience and point of view on certain topics.

## The start

The **idea** is simple: Two players (makes two colored coins), a board with seven columns and six rows and a winning definition of having four coins of the same color in one line (vertical, horizonal or diagonal). These are the basic requirements for the game. As I already mentioned, I described the rough architecture already in [my other article](https://mariusreimer.com/2018/08/i-started-building-a-dapp-these-were-my-architectural-difficulties/).

But what if you don't have any experience in smart contract development, as most developers (including me)? Exactly what I do when I start with something new. I start small, try and build locally, write tests and so on. Until I got used to the system and feel comfortable working with it. Especially for smart contracts, it makes sense to look into [examples](https://solidity.readthedocs.io) and read the 'common patterns'.

Even if you will never release something, you eventually learned new concepts/techniques that may help you in the future (or for fun). You also don't need to be an expert to build something - you learn on the way.

## Developing the smart contract

A smart contract on the Ethereum blockchain is written in [Solidity](https://solidity.readthedocs.io). The language has some similarities to JavaScript, C++ and Python, so it might look familiar to you. If never worked with smart contracts, you need to get into the development environment / toolchain, as I already explained.

There are plenty of good resources and [recommendations for working with Solidity](https://consensys.github.io/smart-contract-best-practices/recommendations/). I highly recommend looking into them regularly, specifically if you intent to develop a smart contract for the main network. Another very good resource and collection of utilities for developing smart contracts is the [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity) library.

I have separated the contracts into several sub-contracts that inherit from another to make the code more readable. This gives us the following file structure:

- FourConnect.sol: Acts as the 'core' contract and contains all the main methods the user interacts with
- FourConnectCalls.sol: Contains only external view / call methods that does not cost gas and just returns different parts of the contract's state
- FourConnectModifiers.sol: Contains only modifiers that for example check wether a player is allowed to turn or not (and revert if not)
- FourConnectBase.sol: Contains the contract's game struct, enums, constants, events and internal helper methods (which for example emit events)

Furthermore, there is the Ownable.sol contract at the very bottom, which could basically provide owner access (upgrading the contract or similar)..

### Testing

We want several different types of functions of a smart contract to be tested. One of them is the throwing of exceptions or better the functionality of requires. Requires give us the possibility of reverting a transaction from malicious or unauthorized use. This could include things like only allowing the owner of the contract to invoke certain functionality.

But also things like checking if the player who is about to make a move actually is allowed to (it's their move, the game is not over and so on). So we need to have a testing method that expects a transaction to revert for that test case:

`gist:reime005/e888e9f364e006bdbc2728f2d15049b7`

Note that this code is strongly related to [this](https://github.com/OpenZeppelin/openzeppelin-test-helpers/blob/master/src/shouldFail.js) helper function. What is basically does is it awaits for a promise to be resolved (the smart contract call) and expects its thrown error message to contain certain strings. If you only want to catch a revert, the 'invalid opcode' should be enough for example.

Another useful thing to include in testing and to actually make sure that certain things happened is the expectation of events. Smart contracts have the possibility to programmatically log events. You could trigger that for example when a game has been created, finished or a move has been made. Events should of course not be the only way of notification, since they do not change the state of the contract, but rather help your trigger functionality in your DApp. 

So we need to have a testing method that expects a transaction to log a certain event:

`gist:reime005/7f1dba23adb1cc84a4defba35b7dc120`

What this test helper method does is it look in the logs array of the smart contract call result for an event that matches the expected one.

## Developing the user interface

The front end / user interface is built in TypeScript / JavaScript on top of the [Preact](https://preactjs.com) library. With that we have a fast and very small (3kb) alternative to React, with (nearly) the same API. Why TypeScript? I wrote about that in my other articles. Anyway, I would describe it as a 'superset' of JavaScript with a layer of types on top of it. It is also part of the repository, even though the code will probably not get the best grades.

The advantage of using Preact is also that the built-in webpack bundler is already (mostly) configured. I had to make some adjustments and disable the UglifyJsPlugin so that it worked with the web3 library. I've used css-grid to build the layout and I really like how easy it is (feels like a replacement for Bootstrap).

I decided to not use any state management library solution like Redux, MobX or ReactN. Reason for that was their configuration effort seemed to be not worth it for that small project.

Continuous Integration has become very easy to use with providers like Netlify. Their service is free for public GitHub repositories, and you can pretty easily add a custom domain.

## Conclusion

- Developing a DApp is not as hard as I thought
- DApps are not really used currently, so don't expect much out of it
- Testing is important and helps you (even simple things like trying to send ether with a transaction that is not _payable_)
- Keep the logic simple, since complex code could lead to more possible bugs and increased gas cost
