import React from "react";

import "./Card.css";


const CompanyCard = ({company}) => {

    return(
        <div className="Card">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
        </div>
    )


};

export default CompanyCard