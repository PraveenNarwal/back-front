const express = require('express');
const { findAllGenres, insertdata } = require('../controllers/genre.controller');

const router = express.Router();

router.route('/').get(findAllGenres).post(insertdata)

module.exports = router