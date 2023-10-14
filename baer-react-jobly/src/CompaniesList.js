import React, {useState, useEffect} from "react";

import JoblyApi from "./Api.js"
import CompanyCard from "./CompanyCard"
import SearchForm from "./SearchForm.js";

import "./List.css";

const CompaniesList = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [companies, setCompanies] = useState([]);

    useEffect(() => {

        async function getCompanies() {

            try {

                let companies = await JoblyApi.getCompanies();
                setCompanies([...companies])
    
                setIsLoading(false);

            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false);
            }

        }

        getCompanies();

    }, []);

    const handleSearch = async (data) => {

        console.log(data)

        if (!data.searchTerms){

            let companies = await JoblyApi.getCompanies()
            setCompanies([...companies])

        } else {

            const nameSearch = { name: data.searchTerms}
            let companies = await JoblyApi.getCompanies(nameSearch)
            setCompanies([...companies])

        }

    }

    if (companies.length === 0) {
        return (

            <div className="List">

                <SearchForm handleSearch={handleSearch}/>

                <h2>No companies match your search criteria.</h2>

            </div>

        )

    }

    if (isLoading) {

        return <p>Loading Companies...</p>

    }

    if (error) {

        return (
        <div>
            <h3>Error Loading Companies</h3>
            <p>{error.message}.</p>
        </div>
        )

    }

    return (

        <div className="List">

            <SearchForm handleSearch={handleSearch}/>

            {companies.map(c => <CompanyCard key={c.handle} company={c}/>)}

        </div>

    )

};

export default CompaniesList;