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
  console.log('connected!');
});

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(null, Error('only image is allowed'));
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
  const { topics } = req.body;
  const { filename } = req.file;
  const { locations } = req.body;
  const { date } = req.body;
  const { time } = req.body;

  if (!topics || !filename || !locations || !date || !time) {
    res.status(422).json({ status: 422, message: 'fill all the details' });
  }

  try {
    const date = moment(new Date()).format('YYYY-MM-DD');

    conn.query(
      'INSERT INTO usersdata SET ?',
      { username: topics, userimg: filename, date: date, location: locations, time: time },
      (err, result) => {
        if (err) {
          console.log('error');
        } else {
          console.log('data added');
          res.status(201).json({ status: 201, data: req.body });
        }
      }
    );
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

// get user data
app.get('/getdata', (req, res) => {
  try {
    conn.query('SELECT * FROM usersdata', (err, result) => {
      if (err) {
        console.log('error');
      } else {
        console.log('data get');
        res.status(201).json({ status: 201, data: result });
      }
    });
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

// delete user
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  try {
    conn.query(`DELETE FROM usersdata WHERE id ='${id}'`, (err, result) => {
      if (err) {
        console.log('error');
      } else {
        console.log('data delete');
        res.status(201).json({ status: 201, data: result });
      }
    });
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

const port = 8007;
app.listen(port, () => {
  console.log('server start');
});
