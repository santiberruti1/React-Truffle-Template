const YourContract = artifacts.require('./web-app/src/contracts/YourContract.sol')

module.exports = function (deployer) {
  deployer.deploy(YourContract)
}
