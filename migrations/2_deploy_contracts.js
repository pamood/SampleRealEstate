const SimpleRealEstate = artifacts.require("SimpleRealEstate")
module.exports = function (deployer) {
  const initialPropertyAddress =
    "188/1A Allen Ave, Dehiwala-Mount Lavinia 10350"
  const initialPropertyValue = 850000000
  const initialLongitude = "79.8656"
  const initialLatitude = "6.8402"
  deployer.deploy(
    SimpleRealEstate,
    initialPropertyAddress,
    initialPropertyValue,
    initialLongitude,
    initialLatitude
  )
}
