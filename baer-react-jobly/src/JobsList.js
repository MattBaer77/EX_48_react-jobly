import React, {useState, useEffect, useContext} from "react";

import { Navigate, NavLink } from "react-router-dom";

import UserContext from "./UserContext.js";

import JobCard from "./JobCard.js"
import SearchForm from "./SearchForm.js";

import "./List.css";

const JobsList = () =>{

    const {currentUser} = useContext(UserContext)

    console.log(currentUser)

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [jobs, setJobs] = useState([]);

    if (!currentUser.token) {

        return <Navigate to='/'/>

    }

    useEffect(() => {

        async function getJobs() {

            try {

                let jobs = await currentUser.apiHelper.getJobs();
                setJobs([...jobs])
    
                setIsLoading(false);

            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false);
            }

        }

        getJobs();

    }, []);

    const handleSearch = async (data) => {

        console.log(data)

        if (!data.searchTerms){

            let jobs = await currentUser.apiHelper.getJobs();
            setJobs([...jobs])

        } else {

            const titleSearch = { title: data.searchTerms}
            let jobs = await currentUser.apiHelper.getJobs(titleSearch);
            setJobs([...jobs])

        }

    }

    if (!currentUser.userName && !currentUser.token && !currentUser.apiHelper) {

        return (

            <div className="List">

                <h2>Login to view jobs.</h2>

            </div>

        )

    }

    if (jobs.length === 0) {
        return (

            <div className="List">

                <SearchForm handleSearch={handleSearch}/>

                <h2>No jobs match your search criteria.</h2>

            </div>

        )

    }

    if (isLoading) {

        return <p>Loading Jobs...</p>

    }

    if (error) {

        return (
        <div>
            <h3>Error Loading Jobs</h3>
            {/* <p>{error.message}.</p> */}

            <NavLink exact="true" to={'/'}>Back to Home</NavLink>

        </div>
        )

    }

    return(

        <div className="List">

            <SearchForm handleSearch={handleSearch}/>

            {jobs.map(j => <JobCard key={j.id} job={j}/>)}

        </div>

    )

}

export default JobsList;