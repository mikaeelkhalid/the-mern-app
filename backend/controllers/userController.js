module.exports = {
  // @desc Register user
  // @route POST /api/users
  // @access Public
  registerUser: (req, res) => {
    res.json({
      message: 'Register user',
    });
  },

  // @desc Login user
  // @route POST /api/users/login
  // @access Public
  loginUser: (req, res) => {
    res.json({
      message: 'Login user',
    });
  },

  // @desc Get user data
  // @route GET /api/users/me
  // @access Private
  getMe: (req, res) => {
    res.json({
      message: 'Get user',
    });
  },
};
