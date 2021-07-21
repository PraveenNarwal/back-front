const express = require('express');
const { registerUser, loginUser, logout } = require('../controllers/user.controller');
const router = express.Router();

router.route('/signup').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logout)



module.exports = router