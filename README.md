# GoodGhosting Backend Challenge

This repo was built in response to the GoodGhosting Backend Challenge.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Follow instructions to install NodeJS from the following link - https://nodejs.org/en/download/
* Follow instructions to install npm from the following link - https://www.npmjs.com/package/npm

### Installing

The following steps will enable you to setup your development environment :

* Clone this repository from here : ```git clone https://github.com/Ectsang/gg-backend-challenge.git```
* Install the node_modules in the root folder : ```npm install```

### Running locally

* Copy `.env.example` to `.env.development` and fill in the setup values (you can get your own `INFURA_PROJECT_ID` from [Infura](https://infura.io/dashboard))
* Run the application on port 3000 : ```npm run dev```
* Run tests : ```npm run test```

## Tech stack

As per request, this repo is built with the following tech stack:
* Typescript
* Ethers.js
* ExpressJS
* Jest (unit testing)

## Directory Structure and Important Files

```
node_modules/           // npm modules
src/                    // source folder
-- abi/                 // contains the ABI of the GoodGhosting contract
-- config/              // all application config files
-- controllers/         // controllers containing app logic
---- users              // users (players) controller
---- game               // game controller
-- models/              // user model (assumes the player struct from the smart contract contains all the necessary fields)
-- routes/              // routes for the application
---- users              // users (players) route
---- game               // game route
-- services/            // services for the application
---- users              // users (players) service
---- game               // game service
-- tests/               // unit tests
-- utils/               // utility functions
---- constants          // constants for the application
---- provider           // ethers provider using Infura
-- app.ts               // instantiate application and register all routes
-- server.ts            // express server config
-- .env.development     // development environment config (rename .env.example and fill in your own values)
-- .eslintrc            // config file for eslint
-- jest.config.js       // config file for jest
-- packages.json        // application definition file
-- tsconfig.json        // config file for typescript
```

## Original Task Description

Write a back-end service that will connect to the KOVAN network and “communicate” (read) with GoodGhosting’s DEMO game on Kovan network.

Requirements: The backend service/repo should have the following features / endpoints:

Backend service to implement a public endpoint that returns the information of a player in the game. The endpoint should receive the player address as a parameter and return the data of the player that is available in the smart contract. If the player address does not exist (it’s not a player), the endpoint should return a different type of response to alert the client consuming it (up to you to decide if that’s done via http status, error code, error message, etc).
At the smart contract level, there’s a Player Struct which stores some information about the player. Please check the smart contract on block explorer to understand what information is returned.
If a given address is not a player in the game, the property “addr” in the player’s struct will return a ‘0x0…’ (zero) address
Backend service to implement a public endpoint that returns the current segment of the game. HOWEVER, this calculation must be done inside the backend service by using (reading) the variables from the smart contract required for such calculation. The data you need from the smart contract is when the game started (variable “firstSegmentStart” and the duration of each round (variable “segmentLength”).
TIP: the smart contract implements a function that performs this calculation, but for the purposes of this code challenge, we’d like you to “duplicate” this logic in the backend service itself instead of simply calling the smart contract’s function.

Write a unit test for each of the endpoints implemented above

Readme file w/ details on how to setup and run the service locally, unit tests, and any additional documentation you see fit


Expected Tech Stack
Typescript
Web3.js or ethers.js
Unit test framework of your choice (at GoodGhosting we use Jest)
Node.js services (like express.js, fastify.js, etc). At GoodGhosting we use NestJS, but feel free to use the one you’re most comfortable with.


What you’ll need:
Address of GoodGhosting Demo Smart Contract on Kovan: 0xc69a569405EAE312Ca13C2eD85a256FbE4992A35
contract available here: https://kovan.etherscan.io/address/0xc69a569405EAE312Ca13C2eD85a256FbE4992A35)
The name of the contract is “GoodGhosting”
GoodGhosting Smart Contract ABI
File “ABI-GoodGhostingWhitelisted.js” attached


You can have a sneak peek of how our DEMO game works on KOVAN at this url:
https://goodghosting.com/#/pools/99999
If you want to use the Game Demo on Kovan, you’ll need:
Some Kovan test ETH to pay for gas.
Get some at Kovan faucet: https://app.mycrypto.com/faucet
At least 1 DAI (Kovan) to make the deposits.
Get some at DAI (kovan) faucet: https://testnet.aave.com/faucet/DAI-0xff795577d9ac8bd7d90ee22b6c1703490b6512fd0x88757f2f99175387ab4c6a4b3067c77a695b0349


For reference: GoodGhosting Game Mechanics + Docs
https://docs.goodghosting.com/goodghosting/game-mechanics-and-technical
