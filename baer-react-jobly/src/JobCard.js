import React from "react";

import "./Card.css";


const JobCard = ({job}) => {

    return(
        <div className="Card">
            <h2>{job.title}</h2>
            <h3>{job.companyName}</h3>
            <p>Salary: {job.salary}</p>
            <p>Equity:{job.equity}</p>
        </div>
    )


};

export default JobCard;