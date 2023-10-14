import React, {useState, useEffect} from "react";

import JoblyApi from "./Api.js"
import CompanyCard from "./CompanyCard"
import SearchForm from "./SearchForm.js";

import "./CompaniesList.css";

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

    // const search = () => {



    // }

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

        <div className="CompaniesList">

            <SearchForm/>

            {companies.map(c => <CompanyCard company={c}/>)}

        </div>

    )

};

export default CompaniesList;