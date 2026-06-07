import {useState, useEffect} from 'react'

import {getUpcomingMovies} from '../../services/api'
import MovieCard from '../../components/MovieCard'

import '../PopularMovies/index.css'

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([])

  const loadMovies = async () => {
    const response = await getUpcomingMovies(1)
    setMovies(response.data.results)
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default UpcomingMovies
