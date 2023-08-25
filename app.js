require('dotenv').config();
const express = require('express');
const multer = require('multer');
const moment = require('moment');
const mysql = require('mysql2');
const app = express();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'userimgupload',
});

conn.connect((error) => {
  if (error) throw error;
  console.log('Connected to the database!');
});

// img storage configuration
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, `image-${uniqueSuffix}.${file.originalname}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(Error('Only image files are allowed'));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

app.use(express.json());

app.use('/uploads', express.static('./uploads'));

// register userdata
app.post('/register', upload.single('photo'), (req, res) => {
  const { topics, locations, date, time, closingDate, closingTime } = req.body;
  const { filename } = req.file;

  if (!topics || !locations || !date || !time || !closingDate || !closingTime || !filename) {
    return res.status(422).json({ status: 422, message: 'Please fill all the details' });
  }

  const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  const formattedClosingDate = moment(closingDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

  const userData = {
    username: topics,
    userimg: filename,
    date: formattedDate,
    location: locations,
    time: time,
    closingDate: formattedClosingDate,
    closingTime: closingTime,
  };

  conn.query('INSERT INTO usersdata SET ?', userData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ status: 500, message: 'Failed to insert data' });
    }
    
    console.log('Data added successfully');
    return res.status(201).json({ status: 201, data: userData });
  });
});

// get user data
app.get('/getdata', (req, res) => {
  conn.query('SELECT * FROM usersdata', (err, result) => {
    if (err) {
      console.error('Error retrieving data:', err);
      return res.status(500).json({ status: 500, message: 'Failed to retrieve data' });
    }

    console.log('Data retrieved successfully');
    return res.status(200).json({ status: 200, data: result });
  });
});

// delete user
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  conn.query(`DELETE FROM usersdata WHERE id = ?`, [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ status: 500, message: 'Failed to delete data' });
    }

    console.log('Data deleted successfully');
    return res.status(200).json({ status: 200, data: result });
  });
});

const port = 8007;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
