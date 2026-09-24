const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());

// Test health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Test database connection
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      status: 'Database connected',
      timestamp: result.rows[0]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});