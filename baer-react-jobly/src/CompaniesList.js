import React, {useState, useEffect} from "react";

import JoblyApi from "./Api.js"
import CompanyCard from "./CompanyCard"

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

    if (isLoading) {

        return <p>Loading Companies...</p>

    }

    if (error) {

        return <p>Error: {error.message}.</p>

    }

    return (

        <div className="CompaniesList">

            {companies.map(c => <CompanyCard company={c}/>)}

        </div>

    )

};

export default CompaniesList;