const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 9000,
  database: 'Events',
});
pool.connect((err, client, release) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Successfully connected to the database!');
      // You can perform additional database operations here if needed
  
      // Release the client back to the pool
      release();
    }
  });
module.exports = pool;