const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

module.exports = {
  // @desc Register user
  // @route POST /api/users
  // @access Public
  registerUser: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please enter all fields');
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      res.status(201).json({
        message: 'User created successfully',
        data: newUser,
      });
    } else {
      res.status(400);
      throw new Error('User not created');
    }
  }),

  // @desc Login user
  // @route POST /api/users/login
  // @access Public
  loginUser: asyncHandler(async (req, res) => {
    res.json({
      message: 'Login user',
    });
  }),

  // @desc Get user data
  // @route GET /api/users/me
  // @access Private
  getMe: asyncHandler(async (req, res) => {
    res.json({
      message: 'Get user',
    });
  }),
};
