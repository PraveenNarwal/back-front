const mongoose = require('mongoose')

const genreSchema = mongoose.Schema({
    genreid: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true
    },
})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre