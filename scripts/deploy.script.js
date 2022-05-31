const hre = require('hardhat')

const owners = [
  '0x2cD3d676F4C53D645aa523cadBf00BA049f4E8eB',
  '0x2E7b6533641b120E88Bd9d97Aa2D7Fd0091Cf32e',
  '0xbcFb8bF3818FC956Ba242e726afE7Be16EFB3eAE',
] // multisig wallet owners
const required = 2 // required number of signatures to complete a multi-sig transaction

async function main() {
  const EtherMultiSigWallet = await hre.ethers.getContractFactory(
    'EtherMultiSigWallet',
  )
  const etherMultiSigWallet = await EtherMultiSigWallet.deploy(owners, required)
  await etherMultiSigWallet.deployed()
  console.log(`EtherMultiSigWallet deployed at ${etherMultiSigWallet.address}`)

  const ERC20MultiSigWallet = await hre.ethers.getContractFactory(
    'ERC20MultiSigWallet',
  )
  const erc20MultiSigWallet = await ERC20MultiSigWallet.deploy(owners, required)
  await erc20MultiSigWallet.deployed()
  console.log(`ERC20MultiSigWallet deployed at ${erc20MultiSigWallet.address}`)
}

// Deployed contracts:
// EtherMultiSigWallet: 0x3b9031804Ae87D776B7E4D954bF24047511934DA
// ERC20MultiSigWallet: 0x9b49706BF270241d36CB347f6fd6F965e122B6C6
// Network: Optimism Kovan

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
