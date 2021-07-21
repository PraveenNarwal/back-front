const Genre = require('../models/genre.model')

const findAllMovies = (req, res) => {

    res.send("All Movies Data in JSON format from Mongo DB")

}


module.exports = { findAllMovies }