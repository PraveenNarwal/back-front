const MoviesData = require('../models/movie.model')

const findAllMovies = async (req, res) => {


    try {
        const fetchedMovie = await MoviesData.find()

        const query = req.query

        if (query.status === 'PUBLISHED' && query.title) {
            const allpublished = await MoviesData.find({ published: true, title: query.title });
            res.send(allpublished)
        }
        else
            if (query.status === 'PUBLISHED') {
                const published = await MoviesData.find({ published: true, });
                res.send(published)
            }
            else
                if (query.status === 'RELEASED') {
                    const released = await MoviesData.find({ released: true });
                    res.send(released)
                } else {
                    res.send(fetchedMovie);
                }


    } catch (error) {
        res.status(400).send(error)
    }



}


const findOne = async (req, res) => {

    try {
        const singlemovie = await MoviesData.findOne({ movieid: req.params.id }).exec()
        res.json(singlemovie);

    } catch (error) {
        res.status(400).send(error)
    }
}

const findShows = async (req, res) => {

    // console.log(params);
    const singlemovie = await MoviesData.find({ movieid: req.params.id })

    res.send(singlemovie[0].shows)
}
module.exports = { findAllMovies, findOne, findShows }






// const getReal = (req, res) => {
//     const query = req.query

//     const realesed = movies.filter(m => m.status === query.status)

//     res.send(realesed)
// }