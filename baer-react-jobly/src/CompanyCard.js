import React from "react";

import { NavLink } from "react-router-dom";

import "./Card.css";

const CompanyCard = ({company}) => {

    return(
        <div className="Card">
        <NavLink exact="true" to={`/companies/${company.handle}`}><h2>{company.name}</h2></NavLink>
            <p>{company.description}</p>
        </div>
    )

};

export default CompanyCard;