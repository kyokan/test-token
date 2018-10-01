var TestToken = artifacts.require("./TestToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(TestToken).then((contract) => {
    return contract.mint(accounts[1], '1000000');
  })
};
