"# Krushi Sarjana Blockchain

A blockchain implementation for storing agricultural product information with a beautiful web-based explorer interface.

## Features

- **🎨 Blockchain Explorer UI**: Beautiful web interface to visualize all blocks and their data
- **📦 Store Products**: Add agricultural product information to the blockchain
- **🔗 Immutable Records**: Cryptographic hashing ensures data integrity
- **📊 Statistics Dashboard**: Real-time blockchain statistics
- **🔄 Auto-refresh**: Updates every 30 seconds automatically
- **📱 Responsive Design**: Works on all devices

## Tech Stack

- Node.js & Express.js
- SHA-256 Cryptographic Hashing
- HTML/CSS/JavaScript (Vanilla)
- RESTful API

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The server will start on `http://localhost:5003`

## Blockchain Explorer UI

🌐 Visit `http://localhost:5003` in your browser to view the Blockchain Explorer.

### UI Features:
- **Statistics Cards**: Total blocks, products, farmer products, and retailer products
- **Block Visualization**: Each block displayed as a detailed card with:
  - Block index and timestamp
  - Product image with seller badge overlay
  - Product name, category badge, and description
  - Price, stock quantity, and unit information
  - Block hash and previous hash for verification
  - Color-coded genesis block
- **Chain Links**: Visual arrows showing blockchain connectivity
- **Manual Refresh Button**: Instantly reload blockchain data
- **Auto-refresh**: Updates every 30 seconds
- **Fully Responsive**: Adapts to mobile, tablet, and desktop screens

## API Endpoints

### 📍 Add Product to Blockchain
```
POST http://localhost:5003/add-product
Content-Type: application/json

{
  "name": "Product Name",
  "sellerType": "Farmer" or "Retailer",
  "category": "Category Name",
  "price": 100,
  "stock": 50,
  "unit": "Kg/Piece/Liter",
  "description": "Product description",
  "image": "Image URL"
}
```

**Response:**
```json
{
  "message": "Product added to blockchain successfully!",
  "block": { ... }
}
```

### 📍 Get Entire Blockchain
```
GET http://localhost:5003/chain
```

**Response:** Array of all blocks in the blockchain

### 📍 Blockchain Explorer UI
```
GET http://localhost:5003/
```

Opens the visual blockchain explorer interface.

## Blockchain Structure

Each block contains:
```javascript
{
  index: Number,           // Block position in chain
  timestamp: String,       // ISO 8601 timestamp
  product: {
    name: String,
    sellerType: String,    // "Farmer" or "Retailer"
    category: String,
    price: Number,
    stock: Number,
    unit: String,
    description: String,
    image: String          // URL
  },
  previousHash: String,    // SHA-256 hash of previous block
  hash: String            // SHA-256 hash of current block
}
```

## Default Products

The blockchain initializes with default products:
- 🌾 Seeds
- 🧪 Fertilizers  
- 🍎 Apple
- 🌿 Coriander
- 💊 Urea 900

## Usage Examples

### Adding a Product via API:
```javascript
const response = await fetch('http://localhost:5003/add-product', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Organic Wheat",
    sellerType: "Farmer",
    category: "Grains",
    price: 45,
    stock: 200,
    unit: "Kg",
    description: "Fresh organic wheat from local farm",
    image: "https://example.com/wheat.jpg"
  })
});
```

### Fetching Blockchain Data:
```javascript
const response = await fetch('http://localhost:5003/chain');
const blockchain = await response.json();
console.log(`Total blocks: ${blockchain.length}`);
```

## Project Structure

```
blockchain-app/
├── blockchain.js       # Blockchain and Block classes
├── server.js          # Express server with API routes
├── public/
│   └── index.html     # Blockchain Explorer UI
├── package.json
└── README.md
```

## Security Features

- **SHA-256 Hashing**: Each block is secured with cryptographic hash
- **Chain Integrity**: Previous hash linking prevents tampering
- **Immutable Records**: Once added, data cannot be modified
- **Genesis Block**: Special first block initializes the chain

## License

MIT
" 
