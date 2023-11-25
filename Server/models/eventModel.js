const pool = require('../config/db');

const eventModel = {
  getAllEvents: async () => {
    const query = 'SELECT * FROM events';
    const { rows } = await pool.query(query);
    return rows;
  },

  deleteEvent: async (eventId) => {
    const query = 'DELETE FROM events WHERE id = $1';
    await pool.query(query, [eventId]);
  },
};

module.exports = eventModel;