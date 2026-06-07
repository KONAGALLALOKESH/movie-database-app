import {useState, useEffect} from 'react'

import {getTopRatedMovies} from '../../services/api'
import MovieCard from '../../components/MovieCard'

import '../PopularMovies/index.css'

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])

  const loadMovies = async () => {
    const response = await getTopRatedMovies(1)
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

export default TopRatedMovies
