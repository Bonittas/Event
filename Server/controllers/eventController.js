const pool = require('../models/eventDataModel');

// Register userdata
const registerUser = (req, res) => {
  const { topics, locations, date, time, closingDate, closingTime } = req.body;
  const { filename } = req.file;

  if (!topics || !locations || !date || !time || !closingDate || !closingTime || !filename) {
    return res.status(422).json({ status: 422, message: 'Please fill all the details' });
  }

  const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  const formattedClosingDate = moment(closingDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

  const userData = {
    topics: topics,
    filename: filename,
    date: formattedDate,
    location: locations,
    time: time,
    closingDate: formattedClosingDate,
    closingTime: closingTime,
  };

  pool.insertUserData(userData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ status: 500, message: 'Failed to insert data' });
    }

    console.log('Data added successfully');
    return res.status(201).json({ status: 201, data: userData });
  });
};

// Get user data
const getUserData = (req, res) => {
  pool.getUserData((err, result) => {
    if (err) {
      console.error('Error retrieving data:', err);
      return res.status(500).json({ status: 500, message: 'Failed to retrieve data' });
    }

    console.log('Data retrieved successfully');
    return res.status(200).json({ status: 200, data: result });
  });
};

// Delete user
const deleteUser = (req, res) => {
  const { id } = req.params;
  pool.deleteUserData(id, (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ status: 500, message: 'Failed to delete data' });
    }

    console.log('Data deleted successfully');
    return res.status(200).json({ status: 200, data: result });
  });
};

module.exports = {
  registerUser,
  getUserData,
  deleteUser,
};