module.exports = {
  // @desc    Get all goals
  // @route   GET /api/goals
  // @access  Private
  getGoals: (req, res) => {
    res.status(200).json({
      message: 'Goals fetched successfully!',
    });
  },

  // @desc    Create a goal
  // @route   POST /api/goals
  // @access  Private
  createGoal: (req, res) => {
    res.status(200).json({
      message: 'Goal created successfully!',
    });
  },

  // @desc    Update a goal
  // @route   PUT /api/goals/:id
  // @access  Private
  updateGoal: (req, res) => {
    res.status(200).json({
      message: `${req.params.id} updated successfully!`,
    });
  },

  // @desc    Delete a goal
  // @route   DELETE /api/goals/:id
  // @access  Private
  deleteGoal: (req, res) => {
    res.status(200).json({
      message: `${req.params.id} deleted successfully!`,
    });
  },
};
