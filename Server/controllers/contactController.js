// Handle storing contact information
const storeContactInfo = (req, res) => {
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
  };
  
  module.exports = {
    storeContactInfo
  };