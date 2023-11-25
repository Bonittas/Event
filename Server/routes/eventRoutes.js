const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.get('/getdata', eventController.getAllEvents);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;