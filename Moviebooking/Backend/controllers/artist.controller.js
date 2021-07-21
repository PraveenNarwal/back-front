const Artist = require('../models/artist.model')

const findAllArtists = async (req, res) => {
    try {
        const fetchedArtist = await Artist.find()

        res.send(fetchedArtist);

    } catch (error) {
        res.status(400).send(error)
    }
}



module.exports = { findAllArtists }