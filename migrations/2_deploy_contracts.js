const SimpleRealEstate = artifacts.require("SimpleRealEstate")
module.exports = function (deployer) {
  const initialPropertyAddress =
    "188/1A Allen Ave, Dehiwala-Mount Lavinia 10350"
  const initialPropertyValue = 850000000
  const initialLongitude = "79.87137"
  const initialLatitude = "6.85164"
  deployer.deploy(
    SimpleRealEstate,
    initialPropertyAddress,
    initialPropertyValue,
    initialLongitude,
    initialLatitude
  )
}
