import React, {useState, useEffect, useContext} from "react";

import UserContext from "./UserContext.js";

import {useParams, NavLink, Navigate} from "react-router-dom"

import JobCard from "./JobCard.js";
import SearchForm from "./SearchForm.js";

import "./List.css";

const CompanyDetail = () => {

    const {handle} = useParams()

    const {currentUser} = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [company, setCompany] = useState(null)
    const [jobs, setJobs] = useState([]);

    if (!currentUser.token) {

        return <Navigate to='/'/>

    }

    useEffect(() => {

        async function getCompany() {

            try {

                let company = await currentUser.apiHelper.getCompany(handle);
                setCompany(company);
                setJobs(company.jobs)

                setIsLoading(false);
                
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false);
            }
        }

        getCompany()

    }, [])

    const handleSearch = async (data) => {

        if (!data.searchTerms){

            let jobs = company.jobs
            setJobs([...jobs])

        } else {

            let jobs = company.jobs.filter((job) => job.title.toLowerCase().includes(data.searchTerms.toLowerCase()))
            setJobs([...jobs])

        }

    }

    if (isLoading) {

        return <p>Loading Company...</p>

    }

    if (error) {

        return (
        <div>
            <h3>Error Loading Company</h3>
            {/* <p>{error.message}.</p> */}
            <NavLink exact="true" to={'/companies'}>Back to Companies</NavLink>
        </div>
        )

    }

    return (
        <div className="List">

            <h2>{company.name}</h2>
            <p>{company.description}</p>

            <SearchForm handleSearch={handleSearch}/>

            {jobs.map(j => <JobCard key={j.id} job={j}/>)}
            {jobs.length < 1 && <h2>No jobs match your search criteria.</h2>}

        </div>
    )

}

export default CompanyDetail;