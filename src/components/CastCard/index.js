import './index.css'

const CastCard = props => {
  const {cast} = props

  return (
    <div className="cast-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
        alt={cast.original_name}
        className="cast-image"
      />

      <h4>{cast.original_name}</h4>

      <p>{cast.character}</p>
    </div>
  )
}

export default CastCard
