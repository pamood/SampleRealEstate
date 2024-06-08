const SimpleRealEstate = artifacts.require("SimpleRealEstate")
module.exports = function (deployer) {
  const initialPropertyAddress = "123 Blockchain St."
  const initialPropertyValue = 100000
  deployer.deploy(
    SimpleRealEstate,
    initialPropertyAddress,
    initialPropertyValue
  )
}
