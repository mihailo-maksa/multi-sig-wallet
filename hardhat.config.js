require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  solidity: '0.8.4',
  networks: {
    local: {
      url: 'http://127.0.0.1:8545',
      accounts: [process.env.PRIVATE_KEY],
    },
    optimism_kovan: {
      url: 'https://kovan.optimism.io',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}
