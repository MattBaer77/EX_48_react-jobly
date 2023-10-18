import React, {useContext} from "react";

import UserContext from "./UserContext";

import "./Card.css";


const JobCard = ({job}) => {

    const {currentUser, apply} = useContext(UserContext)

    return(
        <div className="Card">
            <h2>{job.title}</h2>
            <h3>{job.companyName}</h3>
            {job.salary >0 && <p>Salary: {job.salary}</p>}
            {job.equity >0 && <p>Equity:{job.equity}</p>}

            {(!currentUser.applications.includes(job.id)) && <button onClick={()=>apply(job.id, currentUser.username)} className="apply-button">Apply</button>}
            {(currentUser.applications.includes(job.id)) && <button readOnly="readonly" className="apply-button-disabled">Applied!</button>}

        </div>
    )

};

export default JobCard;