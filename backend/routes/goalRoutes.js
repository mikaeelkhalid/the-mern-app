const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Goals fetched successfully!',
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'Goal created successfully!',
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    message: `${req.params.id} updated successfully!`,
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: `${req.params.id} deleted successfully!`,
  });
});

module.exports = router;
