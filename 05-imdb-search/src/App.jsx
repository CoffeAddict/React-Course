import './App.css'
import './water.css'
import MovieResults from './components/MovieResults'
import MovieSearch from './components/MovieSearch'
import { useMovies } from './hooks/useMovies'

function App() {
  // console.log(import.meta.env.VITE_OMDB_API_KEY)
  const movies = useMovies()

  return (
    <>
      <header>
        <MovieSearch/>
      </header>
      <main>
        <MovieResults results={movies}/>
      </main>
    </>
  )
}

export default App
