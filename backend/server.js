const express = require('express');
const dotevn = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const PORT = 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
