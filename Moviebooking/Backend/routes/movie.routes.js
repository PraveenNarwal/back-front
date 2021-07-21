const express = require('express');
const { findAllMovies, findOne, findShows } = require('../controllers/movie.controller');

const router = express.Router();

router.route('/').get(findAllMovies)
router.route('/:id').get(findOne)
router.route('/:id/shows').get(findShows)




module.exports = router