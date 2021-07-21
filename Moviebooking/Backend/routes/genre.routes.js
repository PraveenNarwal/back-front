const express = require('express');
const { findAllGenres } = require('../controllers/genre.controller');

const router = express.Router();

router.route('/').get(findAllGenres)

module.exports = router