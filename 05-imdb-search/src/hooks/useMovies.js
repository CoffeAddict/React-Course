import responseMovies from '../mocks/with-results.json'
// import responseNoMovies from '../mocks/without-results.json'

export function useMovies () {
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster
    }))

    return mappedMovies
}