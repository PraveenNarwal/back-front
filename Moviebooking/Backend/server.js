const express = require('express');
const movieRoutes = require('./routes/movie.routes')
const genresRoutes = require('./routes/genre.routes')
const artistsRoutes = require('./routes/artist.routes')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello home");
})

app.use('/movies', movieRoutes)
app.use('/genres', genresRoutes)
app.use('/artists', artistsRoutes)



app.listen(9000, console.log('Server Started...'))




