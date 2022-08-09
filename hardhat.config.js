require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
let secret = require('./.secret');
module.exports = {
  paths: {
    artifacts: './src/artifacts',
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    Rinkeby: {
      url: secret.rinkeby_url,
      accounts: [secret.rinkeby_key],
    },
  },

  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apikey: 'BZ4HY927NDEPQCW5MHJFVV1XH4TY84T97Q',
  },
};
