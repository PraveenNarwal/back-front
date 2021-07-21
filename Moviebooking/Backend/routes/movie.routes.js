const express = require('express');
const { findAllMovies } = require('../controllers/movie.controller');

const router = express.Router();


router.route('/').get(findAllMovies)





module.exports = router