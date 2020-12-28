---
title: "My first experiences with Solidity Smart Contracts"
date: "2018-08-12"
description: "Over the past months, I've been working with Smart Contracts for the Ethereum Blockchain. In the beginning I had some struggles figuring out where to start and how the whole thing basically works."
slug: "my-first-experiences-with-solidity-smart-contracts"
categories:
  - "blog"
tags:
  - "blockchain"
  - "cryptocurrency"
  - "ethereum"
  - "smart-contract"
  - "solidity"
  - "testing"
  - "truffle"
cover_image: "https://mariusreimer.com/images/markus-spiske-507983-unsplash.jpg"
---

# Why I'm writing this

Over the past months, I've been working with Smart Contracts for the Ethereum Blockchain. In the beginning I had some struggles figuring out where to start and how the whole thing basically works. Also, the smart contract deploy process and testing was kind of confusing.

# Who I'm writing this for

In short: Anyone who wants to start building smart contracts for the Ethereum blockchain. Some of these questions will be solved, some later: How to 'upload' a contract? Which language to use? Which toolchain if there is any? Testing? How can I interact with my smart contract later? How does the interaction with the blockchain work, do I have to run a node? Stupid questions lead to stupid answers, but by this time I did not think they were stupid at all...

# First thing: Toolchains

In order to create a Smart Contract for the Ethereum blockchain, you need to know Solidity. [Solidity](http://solidity.readthedocs.io) the state-of-the-art programming language for developing Ethereum smart contracts. The syntax is kind of similar to JavaScript. You need a compiler which outputs the compilation result in a JSON format. The easiest way to try Solidity is by using the [Remix browser.](https://remix.ethereum.org/) It allows you to deploy, run and thus test Solidity smart contracts easily.

I've used the [Truffle Suite](https://truffleframework.com) framework, which makes the whole pipeline of developing and testing Solidity smart contracts very easy. You have to [install the framework](https://github.com/trufflesuite/truffle) and then initialize a new project via

`gist:reime005/67e752e4fbf713f803cde5c026f236b8`

To test a contract, you also need a blockchain. It is recommended to use the one-click private blockchain that is included in the Truffle Suite, called Ganache. I've written a how-to which you can find [here](https://mariusreimer.com/2018/08/this-is-how-to-get-into-crypto-using-a-private-blockchain/), or just use the [official documentation](https://truffleframework.com/ganache).

For interaction with the smart contract, like in a decentralized application, you also need some kind of client. I will explain this in another article. You can find the full source code for the contract of this article [here](https://github.com/reime005/gatsby-dapp-example/tree/master/truffle).

# Second thing: Where to start?

Now that we have set up the toolchains, we can start creating a smart contract. Besides the [official Solidity documentation](http://solidity.readthedocs.io), I've looked into existing repositories to check for common patterns. I found a toolset/repository called [OpenZeppelin Solidity.](https://github.com/OpenZeppelin/openzeppelin-solidity) Why should you use this? It includes a lot of helpful contracts and methods to use - for example a safe math module, which prevents you from integer overflows or division by zero, etc. There are also base contract like the [Ownable Contract](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ownership/Ownable.sol) which you can inherit from, meaning that the creator/deployer of the contract can transfer ownership or only he/she is allowed to do specific transactions, etc.

# Next: Create a simple storage contract

The common file ending for Solidity contracts is ".sol". So we create a file named "NameStorageExample.sol" which does what the name already indicates. Its goal is to store names or strings in different ways. Meaning that the contract must have the following requirements:

- Storing the contract's name "NameStorageExample". Only the contract's owner can change this name. We will call this field 'contractName'
- Storing a name related to an address. Meaning that only the person behind that account can change it's own name - a personal name. We will call this field 'addressNames'
- Storing names at an index. Anyone can put data into this field (add to the end), and its index is incremented when doing so. We should not be able to change a name at an index later. We will call this field 'indexNames'

We will test and implement these three different ways of storing names. Note: this example might not make complete sense in real life.

The [header](http://solidity.readthedocs.io/en/v0.4.24/layout-of-source-files.html) of the contract will look like the following:

`gist:reime005/a7f96af71158ae5eedc00dc9ca6b0842`

Solidity has very strict [code conventions](http://solidity.readthedocs.io/en/v0.4.24/style-guide.html#code-layout), so that the code is consistent. With the Version Pragma 'directive' you make sure that the contract is not being compiled with a newer compiler which could include incompatible changes. Then we need to import the Ownable contract for a simplified 'user permission' and make our contract inherit from it.

`gist:reime005/24283c0a99d36b5b0ad64212aaf95dde`

This is how the variables look like. Solidity has four different [kinds of visibilities](http://solidity.readthedocs.io/en/v0.4.24/contracts.html#visibility-and-getters) for functions and three for variables. We will use the 'public' visibility for 'contractName', 'addressNames' and 'indexNames'. That will cause the automatic creation of getter function and thus safes us lines of code. For the 'indexNames' field there will be a contract-global 'currentIndex'. The whole idea behind visibility is not the 'hide it from the user or public'. Even if you use 'private' instead of 'public', everything will still be readable from public. It just prevents other contracts from accessing and modifying the information.

### Special Types and Units

There [are types](https://solidity.readthedocs.io/en/v0.4.24/types.html#value-types) which are very specific to Solidity and reminded me a bit to C/C++. Some of the interesting ones are:

- Data Type 'address': 20 bytes in size. Also [includes](https://solidity.readthedocs.io/en/v0.4.24/types.html#address) a 'balance' and 'transfer' method
- Reference Type 'struct': to define new types or a collection of fields
- [Units](https://solidity.readthedocs.io/en/v0.4.24/units-and-global-variables.html#ether-units) so that you can type something like '2 ether' or '31 days'
- [Mappings](https://solidity.readthedocs.io/en/v0.4.24/types.html#mappings) so that you can do things similar to a hash table/map key -> value data structure
- [Events](https://solidity.readthedocs.io/en/v0.4.24/contracts.html#events) which can be used to interact with the user interface of a DApp, which means you can listen for that

And there are many more...

### Two different kinds of function calls

In general, you have to pay a gas fee for any transaction that you want to do on the blockchain. But you can still [declare functions](http://solidity.readthedocs.io/en/v0.4.24/contracts.html#functions) on a way that they don't modify any values/state of the contract, which means that there will be no gas fees. In our case, all automatically generated getter will be marked with 'view'. Also, if you only want to receive the name behind the sender, you could do it on this way:

`gist:reime005/4bcadbbd7cce2d7605dbc1be3f15cb35`

The function declaration for 'getAddressName' also includes the following:

- Visibility 'external': Can be called from outside the contract, but only via 'this' from the inside. Those methods are supposed to be more efficient when receiving large data
- Declaration for what data type the method will return
- A ['msg' object](https://solidity.readthedocs.io/en/v0.4.24/units-and-global-variables.html?highlight=msg#block-and-transaction-properties) which is passed by automatically (special transaction property) and includes information like the value passed by (msg.value) or the sender's address (msg.sender)

If you want to change the state of the contract, the 'view' declaration will probably not work. For that case the sender has to pay gas. A simple method can look like this:

`gist:reime005/f4941beeea7fb7597d770d77d5977b77`

The function 'changeAddressName' now includes a 'AddressNameChanged' event, which will be emitted before we actually change the state. This is for the user to have a notification later on or doing logging.

`gist:reime005/27bdef5de77595acffdf5c5f4d8b57e6`

The more interesting method 'changeContractName' now requires us to allow only the owner of the contract to change the name. This is where the modifier 'onlyOwner' comes in. [Function Modifiers](https://solidity.readthedocs.io/en/v0.4.24/structure-of-a-contract.html#function-modifiers) are used to do checks for conditions prior to executing the function.

`gist:reime005/557278740d8488fd8677006bfdb68ae0`

The 'onlyOwner' modifier throws (reverts like calling revert()) the function if the condition being checked is not true. In other words, if the sender is not the owner, he or she will not be able to change the contract's name and will receive a revert/exception.

### What are general code recommendations or patterns?

- Avoid loops
- Avoid modifications of large areas of storage
- Avoid clearing or copying arrays in storage

# Now: We should test that Contract

Doing [tests for solidity](https://truffleframework.com/docs/truffle/testing/writing-tests-in-javascript) is quite easy using the Truffle Suite, especially if you have are familiar with Mocha and Chai. There are basically two ways of writing tests: in Solidity and in JavaScript. The latter is what I will explain a bit here. You need to run your tests against a network, where I can again recommend Ganache. We will use a file called 'testNameStorageExample.js' in the '/test' folder.

`gist:reime005/c39eceea922337b28abd4217426c9a80`

Before each contract() call, the contracts are redeployed to clean state changes. We are also provided with a list of accounts. What we could do now is to check if the initial contract name has been set / the getter related to the public variable has been created:

`gist:reime005/d0fb386b7082ebe833dae347634f9ccb`

Thanks to the 'new' async/await syntax that is supported, we can make really concise and clean tests. We first wait until the deployed instance is ready and then use the call function the receive the contract name. If they don't equal, the test will fail.

### Something more complex: Testing for a Transaction to fail

In order for a function to fail, we need to inspect the related error message for the 'revert' keyword. I found the helper method [expectThrow](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/test/helpers/expectThrow.js) from the OpenZeppelin repository very helpful. I modified it slightly and renamed it, so a test case would look like the following:

`gist:reime005/820aa591567ab7948c4449b82af65e61`

We first check if someone else than the owner (who is accounts\[0\]) is able to change the contract's name. If this is possible, the test will fail. Otherwise, we want to correctly change the name using the owner's account.

Another interesting test would be to try if someone can actually set a name for its own account. Have a look at the following:

`gist:reime005/37eafb234e1477c94f7672b80fd56c75`

There we test if the names for the first two accounts have been set correctly. We define the sender by passing the object, as you can see. You could also add a 'value' field, but this might lead to a revert(), if you send value to a non-payable function (you have to declare the method as 'payable' then.

I've done more tests, but they are all kind of similar to each other. For running the test, you need to execute `truffle test`.

A subscription is always appreciated!
