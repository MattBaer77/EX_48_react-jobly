import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return(
        <div className="NavBar">

            <NavLink exact="true" to={'/companies'}>Companies</NavLink>
            {/* <NavLink exact to={'/jobs'}>Jobs</NavLink> */}

        </div>
    )


}

export default NavBar;