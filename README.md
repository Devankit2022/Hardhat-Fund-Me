
# Fund Me

Through the use of this smart contract, you can raise money.

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and get an ouput like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install)
  - You'll know you've installed yarn right if you can run `yarn --version` and get an output like: `x.x.x`
  - You might need to install it with [npm](https://classic.yarnpkg.com/lang/en/docs/install/) if you are facing any issues.

## Quickstart

```
git clone https://github.com/Devankit2022/Hardhat-Fund-Me.git
cd hardhat-fund-me-fcc
yarn
```

# Usage

### Deploy

```
yarn hardhat deploy
```

### Test

```
yarn hardhat test
```

### Test Coverage
```
yarn hardhat coverage
```

## Deployment to a testnet

#### Setup environment variables

You'll want to set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)).

- `SEPOLIA_RPC_URL`: This is url of the seplia testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

#### Get testnet ETH

Head over to [SEPOLIA FAUCET](https://sepoliafaucet.com/) and get some tesnet ETH. You should see the ETH show up in your metamask.

#### Deploy

```
yarn hardhat deploy --network sepolia
```

### Scripts

After deploy to a testnet or local net, you can run the scripts. 

```
yarn hardhat run scripts/fund.js
```

or

```
yarn hardhat run scripts/withdraw.js
```

### Estimate gas

You can estimate how much gas things cost by running the test command, and you'll see and output file called `gas-report.txt`

```
yarn hardhat test
```
#### Estimate gas cost in USD

To get a USD estimation of gas cost, you'll need a `COINMARKETCAP_API_KEY` environment variable. You can get one for free from [CoinMarketCap](https://pro.coinmarketcap.com/signup).

### Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environemnt variable named `ETHERSCAN_API_KEY`

In it's current state, if you have your api key set, it will auto verify using

```
yarn hardhat deploy
```

### Linting

[solhint](https://protofire.github.io/solhint/#installation) installation.

To check linting / code formatting:
```
yarn lint
```
or, to fix: 
```
yarn lint:fix
```

### Formatting 

```
yarn format
```

# Thank You
