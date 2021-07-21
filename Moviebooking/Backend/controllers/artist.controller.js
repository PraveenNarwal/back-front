const Artist = require('../models/artist.model')

const findAllArtists = (req, res) => {
    res.send("All Artist Data in JSON format from Mongo DB")

}



module.exports = { findAllArtists }