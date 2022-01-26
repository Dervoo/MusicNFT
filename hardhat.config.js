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
    Polygon: {
      url: secret.polygon_url,
      accounts: [secret.polygon_key],
    },
    Mumbai: {
      url: secret.mumbai_url,
      accounts: [secret.mumbai_key],
    },
    Bsctest: {
      url: secret.bsctest_url,
      accounts: [secret.bsctest_key],
    },
    Bsc: {
      url: secret.bsc_url,
      accounts: [secret.bsc_key],
    },
    Ethereum: {
      url: secret.ethereum_url,
      accounts: [secret.ethereum_key],
    },
    Ropsten: {
      url: secret.ropsten_url,
      accounts: [secret.ropsten_key],
    },
    Kovan: {
      url: secret.kovan_url,
      accounts: [secret.kovan_key],
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
