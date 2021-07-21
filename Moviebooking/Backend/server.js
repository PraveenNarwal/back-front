const express = require('express');
const connectDB = require('./db');
const movieRoutes = require('./routes/movie.routes')
const genresRoutes = require('./routes/genre.routes')
const artistsRoutes = require('./routes/artist.routes')
const signupRoutes = require('./routes/user.routes')


const app = express()
app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    res.json({ message: "Welcome to  Movie booking application development." });
})

app.use('/api/movies', movieRoutes)
app.use('/api/genres', genresRoutes)
app.use('/api/artists', artistsRoutes)
app.use('/api', signupRoutes)


app.listen(8085, console.log('Server Started...'))




