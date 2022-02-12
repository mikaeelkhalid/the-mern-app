module.exports = {
  getGoals: (req, res) => {
    res.status(200).json({
      message: 'Goals fetched successfully!',
    });
  },

  createGoal: (req, res) => {
    res.status(200).json({
      message: 'Goal created successfully!',
    });
  },

  updateGoal: (req, res) => {
    res.status(200).json({
      message: `${req.params.id} updated successfully!`,
    });
  },

  deleteGoal: (req, res) => {
    res.status(200).json({
      message: `${req.params.id} deleted successfully!`,
    });
  },
};
