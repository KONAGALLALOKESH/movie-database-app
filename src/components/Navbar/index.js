import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Navbar = () => {
  const [search, setSearch] = useState('')

  const history = useHistory()

  const onSearch = () => {
    if (search.trim() !== '') {
      history.push(`/search/${search}`)
    }
  }

  return (
    <nav className="navbar">
      <h1 className="logo">movieDB</h1>

      <div className="nav-links">
        <Link to="/">Popular</Link>

        <Link to="/top-rated">Top Rated</Link>

        <Link to="/upcoming">Upcoming</Link>
      </div>

      <div>
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search Movie"
        />

        <button type="button" onClick={onSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

export default Navbar
