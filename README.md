Welcome friend thank you so much for taking the time to complete the Utopia Labs engineering take home assignment. This fun project will serve as an extra data point as we evaluate you for an engineering.

When you fork this repository, you should make your fork private and share it with jasontheutopian, alextheutopian, and prycetheutopian on Github with an admin role. By forking this repository, you agree to keep the MIT License intact and assign the MIT License to your fork as well.

The challenge is to build out a simple ui interface to send an air drop of tokens from a gnosis safe to multiple different addresses.

## Project Description:

In this project you will create a simple 1 page dapp that can show ethereum balances and send transactions. 

Your task is to use React/typescript, [next.js](https://nextjs.org/docs/basic-features/typescript), the useDapp package, and styled-components to create an dapp that can :

1  connect to a Ethereum Metamask wallet, 

2. display how much Ethereum is in said wallet, 

3. take in inputs of amount of eth, and reciepient wallet to send a transaction of ethereum.

We don't have strong preferences on the styling, If you don't have familiarity with existing styling or templates, minimal styling is perfectly fine as well.

## Primary Task and Optional Task

As discussed above, your primary task is to produce an interface that has:

1. connect to a ethereum wallet
2. display how much ethereum is in said wallet,
3. take in inputs of amount of eth, and reciepient wallet to send a transaction of ethereum.

If you have extra time available, feel free to show off your strengths! You can style the site, cache the most recent input, or implement any of the following features:

- create validate transaction amount and wallet address
- Show Ethereum values in USD as well

## Using the starter repo;

Starting the repo is a easy as cloning the repository and running 
`yarn`
`yarn dev`
there are some premade components and dependencies for your convenience but using them will probably require reading the usedapp documention

## Resources

Helpful Resources

To query the Ethereum blockchain for an ETH wallet balance, you will want to probaly use the [usedapp](https://usedapp.readthedocs.io/en/latest/getting-started.html#ether-balance) react library. You will need a gateway to access the Ethereum blockchain.

The Cloudflare Ethereum Gateway. This does not require any API key.
An [Infura.io](http://infura.io/) gateway. This does require a free API key. The network you'll want is "mainnet".
If you also need help on the next js side of things checkout [https://nextjs.org/docs/basic-features/typescript](https://nextjs.org/docs/basic-features/typescript)

the React state hook will probably helpful for some of the assignment [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)
