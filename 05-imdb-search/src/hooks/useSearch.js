import {useState} from 'react'

function useSearch () {
    const [query, setQuery] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        //On single
        // const form = new FormData(event.target)
        // console.log(form.get('query'))

        //On multiple
        const { query } = Object.fromEntries(new window.FormData(event.target))
        console.log(query)
    }

    const handleInputChange = (event) => {
        const newValue = event.target.value.trim()
        setQuery(newValue)
    }

    return {handleSubmit, query, handleInputChange}
}

export default useSearch