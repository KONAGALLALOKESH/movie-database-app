import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import UpcomingMovies from './pages/UpcomingMovies'
import MovieDetails from './pages/MovieDetails'
import SearchResults from './pages/SearchResults'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={PopularMovies} />
      <Route path="/top-rated" component={TopRatedMovies} />
      <Route path="/upcoming" component={UpcomingMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/search/:query" component={SearchResults} />
    </Switch>
  </>
)

export default App
