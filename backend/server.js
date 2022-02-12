const express = require('express');
const dotevn = require('dotenv').config();

const PORT = 5000;

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});