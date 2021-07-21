const express = require('express');
const { findAllArtists } = require('../controllers/artist.controller');

const router = express.Router();

router.route('/').get(findAllArtists)

module.exports = router