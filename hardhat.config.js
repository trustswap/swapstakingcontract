require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-web3");
require("dotenv").config();

module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545",
    },
    hardhat: {
      allowUnlimitedContractSize: true,
      settings: {
        optimizer: {
          enabled: true,
          runs: 9999,
        },
        evmVersion: "byzantium",
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIVATEKEY],
      live: true,
      saveDeployments: true,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIVATEKEY],
      live: true,
      saveDeployments: true,
      gasPrice: 20000000000,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIVATEKEY],
      live: true,
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  },
  solidity: {
    version: "0.6.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};