import React, {useState} from "react";

const SearchForm = () => {

    const INITIAL_STATE = {
        searchTerms:""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData((data) => {
            return {
                ...data,
                [name]:value
            }
        })

    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        const searchParam = {...formData}
        console.log(searchParam)

        // await updateItems(category, dataToSend)
        setFormData(INITIAL_STATE);
        // history.push(('/'+companies)) ?
    }

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="searchTerms">Search: </label>
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