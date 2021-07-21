const Genre = require('../models/genre.model')

const findAllGenres = (req, res) => {

    res.send("All Genres Data in JSON format from Mongo DB")


}


module.exports = { findAllGenres }