require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

const ALCHEMY_API_KEY = "ALxeCyKAj6LJeIjyuktqKWCuUWgwRy2L";
const MetaMask_PRIVATE_KEY =
  "c766e3df5afcea960863cd45e7b172b2dcf542a74f8f48460f7faf23b0fbb09a";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${MetaMask_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // ehterscan API key, obtain from etherscan.io. allow us to connect with our ether scan account.
    apiKey: "XUXWRCMKRN7CMI3J3NQSU8XEXF86HX87RW ",
  },
};
