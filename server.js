const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Test route - just to confirm the server boots
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
