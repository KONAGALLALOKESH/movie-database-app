import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movie} = props
  const {id, title, vote_average: voteAverage, poster_path: posterPath} = movie

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="movie-image"
      />

      <h3>{title}</h3>

      <p>⭐ {voteAverage}</p>

      <Link to={`/movie/${id}`}>
        <button type="button">View Details</button>
      </Link>
    </div>
  )
}

export default MovieCard
