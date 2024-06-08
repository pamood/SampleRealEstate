const express = require("express")
const Web3 = require("web3").default
const cors = require("cors")
const app = express()
const port = 3000
const SimpleRealEstate = require("../build/contracts/SimpleRealEstate.json")

const web3 = new Web3("http://127.0.0.1:8545") // Connect to local Ethereum node
const contractAddress = "0xCc6caC27AB790e7B72AEC1C5179e0b7F0e105849"
const contractABI = SimpleRealEstate.abi

const contract = new web3.eth.Contract(contractABI, contractAddress)

app.use(express.json())
app.use(cors())

// Endpoint to get property details
app.get("/property", async (req, res) => {
  try {
    const details = await contract.methods.getPropertyDetails().call()
    res.json({
      owner: details[0],
      propertyAddress: details[1],
      propertyValue: details[2].toString(), // Convert BigInt to string
      longitude: details[3],
      latitude: details[4],
    })
  } catch (error) {
    console.error(error)
    res.status(500).send(error.toString())
  }
})

// Endpoint to transfer property
app.post("/transfer", async (req, res) => {
  const { newOwner } = req.body
  const accounts = await web3.eth.getAccounts()
  try {
    const result = await contract.methods.transferProperty(newOwner).send({
      from: accounts[0],
      gas: 3000000,
    })
    res.json({
      message: "Property transferred successfully",
      transactionHash: result.transactionHash,
    })
  } catch (error) {
    console.error(error)
    res.status(500).send(error.toString())
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
