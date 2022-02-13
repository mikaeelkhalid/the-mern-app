const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `MongoDB Connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.db.databaseName}`
        .cyan.underline.bold.cyan.underline.bold
    );
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
