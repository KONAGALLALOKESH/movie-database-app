import {useEffect, useState} from 'react'

import {getMovieDetails, getMovieCredits} from '../../services/api'
import CastCard from '../../components/CastCard'

import './index.css'

const MovieDetails = props => {
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  const loadMovie = async () => {
    const {match} = props
    const {id} = match.params

    const movieResponse = await getMovieDetails(id)
    const castResponse = await getMovieCredits(id)

    setMovie(movieResponse.data)
    setCast(castResponse.data.cast)
  }

  useEffect(() => {
    loadMovie()
    // eslint-disable-next-line
  }, [])

  if (!movie) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="details-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="details-image"
      />

      <h1>{movie.title}</h1>

      <p>⭐ {movie.vote_average}</p>

      <p>Runtime: {movie.runtime} mins</p>

      <p>Release Date: {movie.release_date}</p>

      <p>{movie.overview}</p>

      <h2>Cast</h2>

      <div className="cast-grid">
        {cast.map(each => (
          <CastCard key={each.id} cast={each} />
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
