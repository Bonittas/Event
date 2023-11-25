const express = require('express');
const eventRoutes = require('./routes/eventRoutes');
const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/', eventRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;