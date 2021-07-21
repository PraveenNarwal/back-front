const express = require('express');
const { findAllArtists, artistData } = require('../controllers/artist.controller');

const router = express.Router();

router.route('/').get(findAllArtists).post(artistData)

module.exports = router