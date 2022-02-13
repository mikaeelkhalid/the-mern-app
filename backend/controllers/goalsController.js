const asyncHander = require('express-async-handler');

module.exports = {
  // @desc    Get all goals
  // @route   GET /api/goals
  // @access  Private
  getGoals: asyncHander(async (req, res) => {
    res.status(200).json({
      message: 'Goals fetched successfully!',
    });
  }),

  // @desc    Create a goal
  // @route   POST /api/goals
  // @access  Private
  createGoal: asyncHander(async (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Goal text is required');
    }
    res.status(200).json({
      message: 'Goal created successfully!',
    });
  }),

  // @desc    Update a goal
  // @route   PUT /api/goals/:id
  // @access  Private
  updateGoal: asyncHander(async (req, res) => {
    res.status(200).json({
      message: `${req.params.id} updated successfully!`,
    });
  }),

  // @desc    Delete a goal
  // @route   DELETE /api/goals/:id
  // @access  Private
  deleteGoal: asyncHander(async (req, res) => {
    res.status(200).json({
      message: `${req.params.id} deleted successfully!`,
    });
  }),
};
