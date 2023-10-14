import React, {useState, useEffect} from "react";

const SearchForm = ( {handleSearch} ) => {

    const INITIAL_STATE = {
        searchTerms:""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [initialRender, setInitialRender] = useState(true)

    const handleChange = async (e) => {

        const {name, value} = e.target;

        setFormData((data) => {
            return {
                ...data,
                [name]:value
            }
        })

    }

    useEffect(() => {

        async function reactiveSearch() {

            if (initialRender) {
                setInitialRender(false)
                return;
            }

            console.log(formData)
            const searchParam = {...formData}
            await handleSearch(searchParam)

        }

        reactiveSearch()

    },[formData])

    const handleSubmit = async (e) => {

        e.preventDefault();
        const searchParam = {...formData}
        await handleSearch(searchParam)

    }

    return (

        <form onSubmit={handleSubmit}>

            <label hidden="hidden" htmlFor="searchTerms">Search: </label>
            <input
                type="text"
                placeholder="Enter a search term"
                name="searchTerms"
                id="searchTerms"
                value={formData.searchTerms}
                onChange={handleChange}
            />

            <button>Search</button>

        </form>

    )

}

export default SearchForm;