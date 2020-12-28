---
title: "I started building a DApp – these were my architectural difficulties"
date: "2018-08-05"
description: "In short: I want to share my experience with the process of creating decentralized applications which run on the Ethereum blockchain."
slug: "i-started-building-a-dapp-these-were-my-architectural-difficulties"
categories:
  - "blog"
tags:
  - "bitcoin"
  - "blockchain"
  - "ethereum"
  - "javascript"
  - "solidity"
  - "truffle"
cover_image: "https://mariusreimer.com/images/10n0NX3rgHf2bzldy1uvmiQ.jpeg"
---

# Why I’m writing this

In short: I want to share my experience with the process of creating decentralized applications which run on the Ethereum blockchain.

* * *

After graduating 9 months ago, I’ve been searching for ‘what to do now’. With a masters degree in computer science you have many opportunities. But I wasn’t sure what my passion is and I really liked in development.

I’ve always liked mobile development, but I wanted to do something different now. So I started looking around: AWS, Alexa, React Native/ React in general, Vue.js and many more. I finally made the decision to work on developing a DApp game using React and Truffle.Js.

# Who I’m writing this for

In short: Everyone who has the idea of creating an application that he or she wants to run completely or partly on the blockchain.

* * *

This part is not gonna be focused on coding details, but more on the question:

> What should I think about when building a Decentralized Application from a business and architectural design perspective?

It’s gonna be based on my experience and facts. The blockchain ecosystem (and software engineering in general) is very fast growing and changes often. So by the time reading this, there could be no Ethereum blockchain anymore, the majority switched to a competitor or whatever. But I don’t think it will be that outdated in the near future.

It’s gonna be based on my experience and facts. The blockchain ecosystem (and software engineering in general) is very fast growing and changes often. So by the time reading this, there could be no Ethereum blockchain anymore, the majority switched to a competitor or whatever. But I don’t think it will be that outdated in the near future.

# What is a Blockchain?

Consider the following scenario:

> Think about being in a group of art people where each person draws a picture. At the end of the course, you all want to put your drawings with your name on the wall to win a prize. The next day a jury is going to rate the pictures. And there you see that the name on your picture has been changed to some ‘Rick…’. You can’t prove that it’s yours anymore. Even though you won the million dollar first price…

In a **centralized system**, you would have an authority, like the jury, who would say ‘okay, show my your ID’ – so you can claim your price. But the problem is still that the name has been changed to someone else. The jury could have signed the drawing in the beginning, so that there is no chance of manipulation anymore. But, what if the jury itself is behind the manipulation? Or its system got hacked?

In the end you have to trust one authority to sign your drawing, which is fast and easy to do. Also, when the signing happened, has to be managed by this authority.

In a **decentralized system**, all artists of the group would have two random keys: One for the public and one for private, to keep just for yourself.

The idea is now to use this private key to sign your work so that only you, using your private key, can say that it’s you who created the drawing.

To be consent about what happened and in which happened, we need the concept of a blockchain:

> Each person in the group must have a consent about what happened in the system. That means, that everything is noted publicly.

So when you want to sign your picture, you take, for example your Name and your private key together, to create a unique hash of your work. Using your publicly available key, now everyone can verify that it’s from you. But only you can proof that it’s your work.

Now, the problem comes that anyone could come to do that signing and submit something. And to where? Simply put the crypto signed drawing on the wall? – we need a publicly shared ledger.

Every time someone wants to publish a drawing, he or she needs to put a reference to the latest drawing and their hashed signitation together into a **block**, and then **chain** them together. _Note: this is a very rough explanation of the whole process._ In reality, a new block can only be added to the blockchain if the mathematically problem has been solved (mining process). This means, that the miner, who solved the difficult problem, tells the group about the easily verifiable solution. For a miner to stay motivated in mining, there might be a block reward and fees.

### What is a smart contract? – DApp

Smart contracts are ‘software codes’ that run on a blockchain. They are self-executing, means that there is no central authority necessary to run that software. In general you can do many different things on a blockchain — and currency, ownership or smart contracts are just a few examples of them. A DApp is a decentralized application, which runs partly or entirely on the blockchain.

So, back to the arts and drawing scenario. Let’s say you write a piece of software (smart contract), that handles the whole authority process:

- A jury is deploying a smart contract so that the whole system can begin.
- In order to add a drawing to the system, you have to pay a pre-defined fee, that is being added to a ‘pool’ in the contract.
- Everyone can see who added a drawing to the system.
- The jury can stop the ‘adding drawings’ process and then rate the drawings.
- After the winner has been selected, each voting member gets their occured transaction fees back. Then the winner gets all the money from the pool and the smart contract is being deactivated.

An interesting part about that smart contract system is, that nobody can steal money, manipulate, hack or do whatever bad things.

* * *

# Things you have to keep in mind before creating a DApp

There are some things you have to know before developing or even interaction with a smart contract. So, before you create a decentralized application on the Ethereum blockchain, in my perspective, you have to keep the following in mind:

- All data is gonna be publicly available, but we have the option to encrypt or hash the data (so kind of make it private). There is an official article about the problem of [code obfuscation](https://github.com/ethereum/wiki/wiki/Problems#4-code-obfuscation).
- Every transaction must involve a fee. Otherwise, a decentralized system wouldn’t work. This means, the user has to pay a fee for every transaction. Its amount is related to the number of execution cycles for that smart contract interaction, called **gas cost**.

> Every transaction must include a gas limit and gas price. The higher the **gas price**, the faster the transaction is done (chance that miners will include the transaction in the block). The **gas limit**is for preventing endless running code, which means that your transaction could be reverted. In the end, the user has to pay the **gas used**, which will be converted to Ether). This leads to the following equation: gas cost = gas price \* gas used

- With considering the fee for every transaction, we need to be aware of how fast a transaction can be done. There is only a limited number of transactions per block, so the higher the gas price, the higher the chance that the transaction will be included in that block. See [this calculator](https://ethgasstation.info/).

With these things in mind, you should think wether you really need a decentralized approach for your system, or rather use centralized (or hybrid) one.

### The idea: Building a decentralized Connect Four game

Four connect is a game that probably everyone knows about. Why doing this and not something else? It seemed to be a good choice at first…

There a different versions of the game, and here we have a game board of seven columns and six rows. There a two players involved, who alternate. Each player takes turns by dropping one of their colored coins from the top of a column. The game ends if no one wins, or if one forms a horizontal, vertical or diagonal line of four coins of their own color. You can only place a coin on top of another one unless it is the base line.

These are the important architectural things I thought about initially:

- How do I save the game state in the smart contract? → Array of games. Someone has to create a game. See all the options in the diagram below
- Do I need encryption? → I said no, because there should be no personal or sensible data involved
- How high are the transaction fees for the user? → This can be adjusted by the user, but in the end someone has to pay a fee, in both a centralized or decentralized system
- How fast will a transaction be confirmed? → Probably not fast enough (in ~15 seconds), but I still continued with putting this part on the blockchain
- Should there be money involved, in order for the winner to claim a price and make the game more attracting? → Yes, but we should make it optional

![](/images/1*4OIDh73MtvJIoS1IwQnDHw.png)

# Things I came up with when designing the smart contract

Think about the facts that transactions on the blockchain may take a lot of time and also the higher the processing, the more expensive it is for the user.

By keeping this in mind, I had to rethink the problem and come up with a special solution to these problems:

- Should the user wait for people to join the game? → After the game has been created and you wait for a player to join, there will be a timeout for the creator to wait before he or she can cancel the game
- What if the opponent knows that he or she will lose the game? You could just stop playing so that the actual winner never reaches victory → This is being solved by timeouts, so that a player must make a move within a specific time, otherwise the opponent can claim a timeout victory
- Should the validation for checking if someone has won happen after every move? → You should move this validation to the client, so that he or she has to claim a win specifically. This means that the smart contract only checks for a win if a user calls that transaction

### Lack of real time

As already mentioned, transactions take several seconds and thus a DApp won’t feel real time. So, as soon as you made a move, you have to wait a long time until your opponent will react. That means you need to watch for events from the smart contract. You could improve that by using a message queuing system as a middleware, for queuing messages for the user. In the future, the [Ethereum Whisper](https://github.com/ethereum/wiki/wiki/Whisper)protocol could be used for that.

# Conclusion

- Keep in mind that the user has to pay a transaction fee. So really think about what you compute on the blockchain. Make creative and alternative solutions to use the available resources effectively
- Real time applications are currently not possible due to high transaction times. However, decentralized games in general are definitely feasible to implement using Ethereum. There will probably be technologies like the [Raiden Network](https://raiden.network/)(or [Lightning Network](https://lightning.network/)for BitCoin), which act as a fast (off-chain) Layer between the blockchain an the DApp
