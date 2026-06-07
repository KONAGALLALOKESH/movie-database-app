import {useEffect, useState} from 'react'

import {searchMovies} from '../../services/api'
import MovieCard from '../../components/MovieCard'

import '../PopularMovies/index.css'

const SearchResults = props => {
  const [movies, setMovies] = useState([])

  const loadMovies = async () => {
    const {match} = props
    const {query} = match.params

    const response = await searchMovies(query, 1)

    setMovies(response.data.results)
  }

  useEffect(() => {
    loadMovies()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default SearchResults
