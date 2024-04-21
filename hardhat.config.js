require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrum: {
      url: `https://stylus-testnet.arbitrum.io/rpc`,
      accounts: [],
      chainId: 23011913,
    },
  },
};
