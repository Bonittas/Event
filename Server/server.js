const express = require('express');
const app = express();
const mysql = require('mysql');
const { check, validationResult } = require('express-validator');
const { signup, login } = require('./controllers/authController');
const { registerUser, getUserData, deleteUser } = require('./controllers/eventController');
const { upload } = require('./services/eventUploadService');
const { getSuggData, addSugg } = require('./controllers/suggController');
const uploads = require('./suggUploadService');
const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'suggestion',
});

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Register userdata
app.post('/register', upload.single('photo'), registerUser);

// Get user data
app.get('/getdata', getUserData);

// Delete user
app.delete('/:id', deleteUser);

// Check if the MySQL database connection is successful
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  //Suggestions 
  app.get('/api/getdatas', getSuggData);

// Add a new event
app.post('/api/addsugg', upload.single('photo'), addSugg);

// Serve static files from the 'sugg' directory
app.use('/sugg', express.static(path.join(__dirname, 'sugg')));

  console.log('Connected to MySQL database');
  connection.release();
});

app.use(express.json());

// Endpoint to store contact information
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  pool.query(
    'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
    [name, email, message],
    (error, results) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Endpoint to retrieve the contact information
app.get('/admin', (req, res) => {
  pool.query('SELECT * FROM messages', (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(results);
    }
  });
});

// User signup
app.post('/api/signup', signup);

// User login
app.post('/api/login', login);
// Start the server
const port = 3002;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});