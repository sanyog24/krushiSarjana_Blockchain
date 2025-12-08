const express = require("express");
const cors = require("cors");
const Blockchain = require("./blockchain");

const app = express();
const port = 5003;
const blockchain = new Blockchain();

app.use(cors());
app.use(express.json());

// Route to add a product to the blockchain
app.post("/add-product", (req, res) => {
  const { name, sellerType, category, price, stock, unit, description, image } = req.body;

  // Validate request data
  if (!name || !sellerType || !category || !price || !stock || !unit || !description || !image) {
    return res.status(400).json({ error: "All product fields are required" });
  }

  // Add product to blockchain
  const newBlock = blockchain.addBlock({ name, sellerType, category, price, stock, unit, description, image });

  console.log("New Block Added:", JSON.stringify(newBlock, null, 2)); // Log the new block to verify data

  res.json({ message: "Product added to blockchain successfully!", block: newBlock });
});

// Route to get the blockchain
app.get("/chain", (req, res) => {
  console.log("Blockchain Data:", JSON.stringify(blockchain.getChain(), null, 2)); // Debugging log
  res.json(blockchain.getChain());
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



