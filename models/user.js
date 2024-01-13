// models/user.js
const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    profilePic: {
      type: DataTypes.STRING, // Assuming you store the file path in the database
    },
  });

  return User;
};
