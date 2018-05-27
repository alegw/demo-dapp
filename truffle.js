var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "cliff vintage tooth wood kind laptop congress age jar clown peanut blush";

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/mwBmY5A3A5TI4QZXCLAW")
      },
      network_id: 4
    }   
  }
};
