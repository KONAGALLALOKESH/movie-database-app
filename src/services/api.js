import axios from 'axios'

const API_KEY = '69e034c5360110ce9786df34f1a0dbae'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export const getPopularMovies = page =>
  api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)

export const getTopRatedMovies = page =>
  api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)

export const getUpcomingMovies = page =>
  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)

export const getMovieDetails = id =>
  api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)

export const getMovieCredits = id =>
  api.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)

export const searchMovies = (query, page) =>
  api.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`,
  )
