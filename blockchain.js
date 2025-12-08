const crypto = require("crypto");

class Block {
  constructor(index, timestamp, product, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.product = {
      name: product.name,
      sellerType: product.sellerType,
      category: product.category,
      price: product.price,
      stock: product.stock,
      unit: product.unit || "N/A", // Ensure unit is always present
      description: product.description,
      image: product.image || "https://via.placeholder.com/150", // Ensure image is always present
    };
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.index + this.timestamp + JSON.stringify(this.product) + this.previousHash
      )
      .digest("hex");
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.addDefaultBlocks(); // Call the method to add default blocks
  }

  createGenesisBlock() {
    return new Block(
      0, // Block index (0 for genesis block)
      new Date().toISOString(), // Timestamp
      {
        name: "Genesis Product",
        sellerType: "N/A",
        category: "Genesis",
        price: 0,
        stock: 0,
        unit: "N/A",
        description: "This is the first block in the blockchain",
        image: "https://via.placeholder.com/150",
      },
      "0" // Previous hash (0 for genesis block)
    );
  }

  addDefaultBlocks() {
    const defaultProducts = [
      {
        name: "Seed",
        sellerType: "Retailer",
        category: "Seeds",
        price: 50,
        stock: 100,
        unit: "Kg",
        description: "Seeds",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1739977575/product_…",
      },
      {
        name: "Fertilizer",
        sellerType: "Retailer",
        category: "Pesticides",
        price: 200,
        stock: 40,
        unit: "Kg",
        description: "Best Fertilizer",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1739978387/product_…",
      },
      {
        name: "Apple",
        sellerType: "Farmer",
        category: "Fruits",
        price: 100,
        stock: 40,
        unit: "Kg",
        description: "Best Apple in the world!",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1739978617/product_…",
      },
      {
        name: "Coriander",
        sellerType: "Farmer",
        category: "Vegetables",
        price: 10,
        stock: 100,
        unit: "Piece",
        description: "Fresh coriander from my own farm",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1739990780/product_…",
      },
      {
        name: "urea 900",
        sellerType: "Retailer",
        category: "Pesticides",
        price: 700,
        stock: 20,
        unit: "Kg",
        description: "a pesticide for crops",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1739990996/product_…",
      },
      {
        name: "Pineapple",
        sellerType: "Farmer",
        category: "Fruits",
        price: 50,
        stock: 50,
        unit: "Piece",
        description: "Good Pineapple",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740072362/product_…",
      },
      {
        name: "Spinach",
        sellerType: "Farmer",
        category: "Vegetables",
        price: 70,
        stock: 60,
        unit: "Piece",
        description: "Nice Spinach",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740073874/product_…",
      },
      {
        name: "Moong Dal",
        sellerType: "Farmer",
        category: "Cereals",
        price: 150,
        stock: 75,
        unit: "Kg",
        description: "Fresh and Moong Dal",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740079034/product_…",
      },
      {
        name: "Orange",
        sellerType: "Farmer",
        category: "Fruits",
        price: 75,
        stock: 95,
        unit: "Kg",
        description: "Coconut Details",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740149844/product_…",
      },
      {
        name: "mango seeds",
        sellerType: "Retailer",
        category: "Seeds",
        price: 200,
        stock: 3,
        unit: "Kg",
        description: "seeds of mango ",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740165538/product_…",
      },
      {
        name: "Pesticide 1",
        sellerType: "Retailer",
        category: "Pesticides",
        price: 500,
        stock: 10,
        unit: "Kg",
        description: "Pesticide - which is good",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740171887/product_…",
      },
      {
        name: "Carrot",
        sellerType: "Farmer",
        category: "Vegetables",
        price: 40,
        stock: 100,
        unit: "Piece",
        description: "My carrots are fresh straight from my own farm",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740212748/product_…",
      },
      {
        name: "Brinjal",
        sellerType: "Farmer",
        category: "Vegetables",
        price: 30,
        stock: 50,
        unit: "Kg",
        description: "fresh bringals",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740224071/product_…",
      },
      {
        name: "Brinjal",
        sellerType: "Farmer",
        category: "Vegetables",
        price: 30,
        stock: 50,
        unit: "Kg",
        description: "fresh bringals",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740224104/product_…",
      },
      {
        name: "Carrot",
        sellerType: "Farmer",
        category: "Vegetables",
        price: 20,
        stock: 30,
        unit: "Piece",
        description: "a fresh carrot",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740224661/product_…",
      },
      {
        name: "Chickoo",
        sellerType: "Farmer",
        category: "Fruits",
        price: 20,
        stock: 30,
        unit: "Piece",
        description: "a fresh chickoo",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740224832/product_…",
      },
      {
        name: "Onion",
        sellerType: "Farmer",
        category: "Vegetables",
        price: 50,
        stock: 45,
        unit: "Kg",
        description: "Onion which adds taste in meals!",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740228286/product_…",
      },
      {
        name: "Pineapple",
        sellerType: "Farmer",
        category: "Fruits",
        price: 90,
        stock: 20,
        unit: "Kg",
        description: "Sweetest Pineapple",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740232288/product_…",
      },
      {
        name: "Pineapple",
        sellerType: "Farmer",
        category: "Fruits",
        price: 70,
        stock: 65,
        unit: "Kg",
        description: "Sweet Pineapple",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740232342/product_…",
      },
      {
        name: "watermelon",
        sellerType: "Farmer",
        category: "Fruits",
        price: 20,
        stock: 50,
        unit: "Piece",
        description: "Good Watermelon",
        image: "https://res.cloudinary.com/dbmekgyd3/image/upload/v1740233181/product_…",
      },
    ];

    // Add default blocks to the chain
    defaultProducts.forEach((product) => {
      this.addBlock(product);
    });
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(product) {
    const latestBlock = this.getLatestBlock();
    const newBlock = new Block(
      this.chain.length, // Index of the new block
      new Date().toISOString(), // Timestamp
      product, // Product data
      latestBlock.hash // Previous hash
    );
    this.chain.push(newBlock);
    return newBlock;
  }

  getChain() {
    return this.chain;
  }
}

module.exports = Blockchain;