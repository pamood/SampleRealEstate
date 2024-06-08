const SimpleRealEstate = artifacts.require("SimpleRealEstate")
module.exports = function (deployer) {
  const initialPropertyAddress =
    "188/1A Allen Ave, Dehiwala-Mount Lavinia 10350"
  const initialPropertyValue = 850000000
  deployer.deploy(
    SimpleRealEstate,
    initialPropertyAddress,
    initialPropertyValue
  )
}
