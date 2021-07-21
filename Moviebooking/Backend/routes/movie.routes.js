const express = require('express');
const { findAllMovies, findOne, findShows } = require('../controllers/movie.controller');

const router = express.Router();

// router.route("/:id").put(editTask)
router.route('/').get(findAllMovies)   //    /movies
router.route('/:id').get(findOne)
router.route('/:id/shows').get(findShows)




module.exports = router