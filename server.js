const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/login', (req, res) => {
  // Handle user login
});

app.post('/api/create-game', (req, res) => {
  // Handle game creation
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});