const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let mockDatabase = [
];

// Get all items
app.get('/items', (req, res) => {
  res.json(mockDatabase);
});

// Add a new item
app.post('/items', (req, res) => {
  const newItem = { id: mockDatabase.length + 1, name: req.body.name };
  mockDatabase.push(newItem);
  res.status(201).json(newItem);
});

// Start the server
app.listen(3000, () => {
  console.log('Backend server is running on http://localhost:3000');
});
