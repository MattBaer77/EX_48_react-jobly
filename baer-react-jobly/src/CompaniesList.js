import React, {useState, useEffect, useContext} from "react";

import { Navigate } from "react-router-dom";

import CompanyCard from "./CompanyCard"
import SearchForm from "./SearchForm.js";

import "./List.css";
import UserContext from "./UserContext.js";

const CompaniesList = () => {

    const {currentUser} = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [companies, setCompanies] = useState([]);

    if (!currentUser.token) {

        return <Navigate to='/'/>

    }

    useEffect(() => {

        async function getCompanies() {

            try {

                let companies = await currentUser.apiHelper.getCompanies();
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

        if (!data.searchTerms){

            let companies = await currentUser.apiHelper.getCompanies();
            setCompanies([...companies])

        } else {

            const nameSearch = { name: data.searchTerms}
            let companies = await currentUser.apiHelper.getCompanies(nameSearch)
            setCompanies([...companies])

        }

    }

    if (!currentUser.userName && !currentUser.token && !currentUser.apiHelper) {

        return (

            <div className="List">

                <h2>Login to view companies.</h2>

            </div>

        )

    }

    if (isLoading) {

        return <p>Loading Companies...</p>

    }

    if (companies.length === 0) {
        return (

            <div className="List">

                <SearchForm handleSearch={handleSearch}/>

                <h2>No companies match your search criteria.</h2>

            </div>

        )

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