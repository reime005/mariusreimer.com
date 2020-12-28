---
title: "This is how to get into crypto: Using a private blockchain"
date: "2018-08-09"
description: "If you ever thought about getting into the crypto ecosystem and never did anything like that before, or you have no technical background, this article may be for you."
slug: "this-is-how-to-get-into-crypto-using-a-private-blockchain"
categories:
  - "blog"
tags:
  - "blockchain"
  - "cryptocurrency"
  - "ethereum"
  - "how-to"
cover_image: "https://mariusreimer.com/images/tim-evans-88330-unsplash.jpg"
---

If you ever thought about getting into the crypto ecosystem and never did anything like that before, or you have no technical background, this article is for you.

[In my last article](https://medium.com/@reime005/i-started-building-a-dapp-these-were-my-architectural-difficulties-a2c7139819cf), I roughly described what a blockchain is. It was more about the initial architectural thoughts before creating a decentralized application which is supposed to run on the Ethereum blockchain.

In this article, I will describe how to set up a private blockchain and do some transactions on it (like sending Ether from one account to another). The goal is to make people used to this initially confusing system.

# **Important term #1: Public and Private Key**

Especially if you do not have a technical background (had Cryptography in your study or something), you must get familiar with these two terms. As the names already indicate, one is for keeping private (only!) and the other can be (or will be) made public.

In comparison to a centralized system, like an email provider, the system will tell you, if the account you create is available or already used. In a decentralized system, this will actually not work.

> A private key is a unique and random number that you must keep private. It is used to confirm that you are the owner of your coins. It is like a credit card number and PIN: without that, you can’t send or have money. Do not lose your private key!

All private keys do exist already. There is no one who says, that ‘this private key’ is already used. But the thing is, that the chance of two people getting the same key is extremely low. There are 2^256 (a number with 78 digits) different private keys. In relation: The whole earth has approximately 10^50 (a number with 51 digits) number of atoms!

> A public key is linked to a private key. You can (relatively) easy get from your private key to your public key, but it’s nearly impossible otherwise. The public key is used to receive coins.

# **Important term #2: Seed**

The seed is a number of 12 or 24 words in a specific order, to derive your private key(s) from. This means you can calculate your private key(s) from this chain of words / seed. This means, the seed is as important as your private key, since it leads to them.

# **Important term #3: Wallet**

Important to know is, that a wallet does not save your coins! A wallet is used save your private key(s) which then leads to the blockchain. There are different types of wallets, so you can either print one, buy a legit hardware or use a crypto trading site for that.

The last wallet type might not be the safest, because someone else knows your private key. A hardware wallet, like the Ledger Nano S, is one of the safest methods, because the private key never ‘leaves’ the device so not even you know it.

* * *

# **Create a Private Blockchain on your Computer**

Starting a private blockchain just on your computer sounded strange to me in the beginning. But as a developer who wants to test smart contract, something like that makes sense. Also if you want to play around with transactions, private/public keys or getting used to Meta Mask Browser Extension (which is what I will use).

> [Ganache](https://truffleframework.com/ganache) is a one click blockchain. It lets you quickly fire up a personal Ethereum blockchain for testing while controlling how the chain operates. It lets you do stuff like adjusting the block times, account management and block exploring.

### **Install Requirements**

- Use your favorite browser which supports the MetaMask extension. Be sure that you don’t take a scam! The easiest way is to use their website [metamask.io](https://metamask.io/)
- Install the Ganache software from [here](https://truffleframework.com/ganache). It has a nice graphical user interface

### **Start everything**

After installation, you should be able to start Ganache and something like the following (but with different keys of course):

![](https://cdn-images-1.medium.com/max/2000/1*2nRzc81PBdkqr8rRx3ARkg.png)

There you can see the 10 accounts with their public keys and initial balance of 100.00 Ether. On the top you the gas information and right below the Mnemonic, or also called seed for these private keys.

If you click on the key buttons on the very right side, you will see the private key related to that account’s public key:

![](https://cdn-images-1.medium.com/max/2000/1*gVidWTC2fe_2VghQ0AymzA.png)

The first account has the public key “0x85B961a670AcfaA8D0A8E360658261269FEa99d4” and private key “979618ca57d17890b9b59de1256278177620adc0f5cd6d7dffa30a8e4ab3345c”

If you now click on “Transactions”, you will see that the log is empty. We can change that, by open our browser and send some ETH from one account to another.

# **Use your browser to interact with the Private Blockchain**

After successfully installed the MetaMask browser extension, you should see its icon:

![](https://cdn-images-1.medium.com/max/1600/1*tiKymFvbAy_TGlxkfTjWiQ.png)

On the top-right you can select which blockchain you want to interact with. In our case, we want to go for “Private Network”. Then click on “Import using account seed phrase”. ![](https://cdn-images-1.medium.com/max/2000/1*9Ilru_XmPxPYhRERMg-YvA.png)

Now, you have to copy & paste the Mnemonic from your Ganache window into the MetaMask’s Chrome Browser box. Note that this is a Beta version of the extension, and it might not look the same on your browser. Then type in a nonsense password (security doesn’t matter because it’s private) and click on “Restore”.

You should then see something like the following:

![](https://cdn-images-1.medium.com/max/2000/1*gLNyKf0iJ96tLGe2NRKaYg.png)

You should see the first account of your Private Blockchain’s wallet with its initial balance. Now we want to send some Ether to account 2. We click on “SEND” and should see the following:

![](https://cdn-images-1.medium.com/max/2000/1*f38FE3hAh6FmzKhEPtTFTA.png)

Now, you have to copy & paste the public key of someone's account (lets say account number 2) and set the amount of ETH. Optionally, you could also adjust the gas price and fee. Then click on “NEXT”, which will follow a confirmation screen where you have to confirm your transaction. After confirming, the transaction will be submitted to the private blockchain, mined and then confirmed. Note that this process will probably take longer on a real-world blockchain.

![](https://cdn-images-1.medium.com/max/2000/1*pzXL69ENMo9tQsITTGOa1A.png)

We should see that the transaction has been confirmed and the ETH has been sent to that account. Back in the Ganache software, we should also see this transaction:

![](https://cdn-images-1.medium.com/max/2000/1*Ci2PuytbPZvL9WzVsaffpg.png)

It shows the information about the transaction, including the gas that has been used. In the “Blocks” window, we should see something like the following:

![](https://cdn-images-1.medium.com/max/2000/1*tLoIOV6f5XN5p1QLmcb3YQ.png)

Block 0 was created when we started the private blockchain. This must be the case, and is called “Genesis Block”. Block 1 was the mined block that includes the money transaction.

* * *

You can find this article on Medium here: [https://medium.com/@reime005/this-is-how-to-get-into-crypto-using-a-private-blockchain-a7ad17b7476b](https://medium.com/@reime005/this-is-how-to-get-into-crypto-using-a-private-blockchain-a7ad17b7476b)

A subscription is always appreciated!
