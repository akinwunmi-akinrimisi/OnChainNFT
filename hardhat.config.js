require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YOUhttps://eth-sepolia.g.alchemy.com/v2/NQgFZuGLa-z2hJm6uF1sSPC8EYZKiNNaR_ALCHEMY_API_KEY",
      accounts: [`0x${RIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: "MWS116J74ASM5GGPCB1URG5EJ8X82NRD3F"
  }
};
