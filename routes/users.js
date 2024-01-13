// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../utils/fileUpload');

router.post('/', upload.single('profilePic'), userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', upload.single('profilePic'), userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
