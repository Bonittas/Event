const { query } = require('../server');

// Retrieve event data from the database
exports.getSuggData = (req, res) => {
  query('SELECT * FROM events', (err, results) => {
    if (err) {
      console.error('Error retrieving event data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(results);
  });
};
exports.addSugg = (req, res) => {
  const { description, location, time, date, link } = req.body;
  const photoPath = req.file.path;

  const sql = 'INSERT INTO events (description, location, time, date, img, link) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [description, location, time, date, photoPath, link];

  query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting event data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.status(201).json({ message: 'Event added successfully' });
  });
};

module.exports = {
  getSuggData,
  addSugg
};