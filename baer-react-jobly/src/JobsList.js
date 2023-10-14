import React, {useState, useEffect} from "react";

import JoblyApi from "./Api.js"
import JobCard from "./JobCard.js"
import SearchForm from "./SearchForm.js";

import "./List.css";

const JobsList = () =>{

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        async function getJobs() {

            try {

                let jobs = await JoblyApi.getJobs();
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

            let jobs = await JoblyApi.getJobs()
            setJobs([...jobs])

        } else {

            const titleSearch = { title: data.searchTerms}
            let jobs = await JoblyApi.getJobs(titleSearch)
            setJobs([...jobs])

        }

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

    return(

        <div className="List">

            <SearchForm handleSearch={handleSearch}/>

            {jobs.map(j => <JobCard key={j.id} job={j}/>)}

        </div>

    )

}

export default JobsList;