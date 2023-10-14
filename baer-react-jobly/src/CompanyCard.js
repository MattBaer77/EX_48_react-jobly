import React from "react";

import "./Card.css";

const CompanyCard = ({company}) => {

    return(
        <div className="Card">
            <h2>{company.name}</h2>
            <p>{company.description}</p>
        </div>
    )

};

export default CompanyCard;