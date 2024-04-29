import useSearch from "../hooks/useSearch"

export default function MovieSearch () {
    const {handleSubmit, handleInputChange, query} = useSearch()

    return (
        <>
            <h1>Buscador de Peliculas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={query}
                    name='query'
                    type='text'
                    placeholder='Matrix, Avatar, Mario...'
                    minLength='3'
                    required/>
                <button type='submit'>Buscar</button>
            </form>
        </>
    )
}