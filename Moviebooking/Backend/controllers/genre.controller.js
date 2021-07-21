const Genre = require('../models/genre.model')

const findAllGenres = async (req, res) => {

    try {
        const fetchedGenre = await Genre.find()

        res.send(fetchedGenre);

    } catch (error) {
        res.status(400).send(error)
    }

}


module.exports = { findAllGenres }