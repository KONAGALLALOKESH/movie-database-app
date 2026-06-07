import {useState, useEffect} from 'react'

import {getPopularMovies} from '../../services/api'
import MovieCard from '../../components/MovieCard'

import './index.css'

const PopularMovies = () => {
  const [movies, setMovies] = useState([])

  const loadMovies = async () => {
    const response = await getPopularMovies(1)
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

export default PopularMovies
