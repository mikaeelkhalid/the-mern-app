const asyncHander = require('express-async-handler');
const Goal = require('../models/goalModel');

module.exports = {
  // @desc    Get all goals
  // @route   GET /api/goals
  // @access  Private
  getGoals: asyncHander(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json({
      data: goals,
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

    const goal = await Goal.create(req.body);

    res.status(201).json({
      data: goal,
      message: 'Goal created successfully!',
    });
  }),

  // @desc    Update a goal
  // @route   PUT /api/goals/:id
  // @access  Private
  updateGoal: asyncHander(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      data: updatedGoal,
      message: `${req.params.id} updated successfully!`,
    });
  }),

  // @desc    Delete a goal
  // @route   DELETE /api/goals/:id
  // @access  Private
  deleteGoal: asyncHander(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({
      data: deletedGoal,
      message: `${req.params.id} deleted successfully!`,
    });
  }),
};
