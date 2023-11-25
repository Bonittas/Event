const eventModel = require('../models/eventModel');

const eventController = {
  getAllEvents: async (req, res) => {
    try {
      const events = await eventModel.getAllEvents();
      res.json({ data: events });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteEvent: async (req, res) => {
    const eventId = req.params.id;
    try {
      await eventModel.deleteEvent(eventId);
      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = eventController;