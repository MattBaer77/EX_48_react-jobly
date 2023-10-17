import React, {useState, useEffect, useContext} from "react";

import UserContext from "./UserContext.js";

import {useParams} from "react-router-dom"

import JobCard from "./JobCard.js";

import "./List.css";

const CompanyDetail = () => {

    const {handle} = useParams()

    const {currentUser} = useContext(UserContext)

    console.log(currentUser)

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [company, setCompany] = useState(null)

    useEffect(() => {

        async function getCompany() {

            try {
                let company = await currentUser.apiHelper.getCompany(handle);
                setCompany(company);

                setIsLoading(false);
                
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false);
            }
        }

        getCompany()

    }, [])

    if (!currentUser.userName && !currentUser.token && !currentUser.apiHelper) {

        return (

            <div className="List">

                <h2>Login to view this company.</h2>

            </div>

        )

    }

    if (isLoading) {

        return <p>Loading Company...</p>

    }

    if (error) {

        return (
        <div>
            <h3>Error Loading Company</h3>
            <p>{error.message}.</p>
        </div>
        )

    }

    return (
        <div className="List">

            <h2>{company.name}</h2>
            <p>{company.description}</p>

            {company.jobs.map(j => <JobCard key={j.id} job={j}/>)}

        </div>
    )

}

export default CompanyDetail;