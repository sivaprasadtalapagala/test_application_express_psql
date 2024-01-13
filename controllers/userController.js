// controllers/userController.js
const { models } = require('../models');
const { User } = models;

// exports.createUser = async (req, res) => {
//   try {
//     const { name, mobileNo, email } = req.body;
//     const profilePic = req.file ? req.file.path : null; // Save the file path in the database

//     const user = await User.create({
//       name,
//       mobileNo,
//       email,
//       profilePic,
//     });

//     return res.status(201).json(user);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
exports.createUser = async (req, res) => {
  try {
    const { name, mobileNo, email, profilePic } = req.body;
    const user = await User.create({ name, mobileNo, email, profilePic });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { name, mobileNo, email } = req.body;
    const profilePic = req.file ? req.file.path : user.profilePic; // Keep the existing path if no new file is uploaded

    await user.update({
      name,
      mobileNo,
      email,
      profilePic,
    });

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
