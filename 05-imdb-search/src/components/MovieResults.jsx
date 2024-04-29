import './MovieResults.css'

const Movies = ({results}) => {
  return (
    <div>
      <ul className="movies-container">
        {results.map(movie => {
          return (
            <li key={movie.imdbID} className="movie">
              <p><b>{movie.title}</b> ({movie.year})</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

const NoMovies = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>I&apos;m sorry but the movie you are looking for doesn&apos;t exist</p>
    </div>
  );
}

export default function MovieResults ({results}) {
  const hasResults = results.length > 0
  return (
    hasResults ? <Movies results={results}/> : <NoMovies/>
  )
}