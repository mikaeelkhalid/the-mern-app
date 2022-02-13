const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

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
        token: generateToken(newUser._id),
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
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error('Please enter password and email');
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error(
        `Invalid Credentials: User againt ${email} does not exist`
      );
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400);
      throw new Error('You Entered an incorrect password');
    } else {
      res.json({
        message: 'User logged in successfully',
        data: user,
        token: generateToken(user._id),
      });
    }
  }),

  // @desc Get user data
  // @route GET /api/users/me
  // @access Private
  getMe: asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);

    res.status(200).json({
      message: 'User retrieved successfully',
      data: {
        _id,
        name,
        email,
      },
    });
  }),
};
