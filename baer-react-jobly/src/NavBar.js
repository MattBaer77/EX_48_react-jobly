import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return(
        <div className="NavBar">

            <NavLink exact="true" to={'/companies'}>Companies</NavLink>
            <NavLink exact="true" to={'/jobs'}>Jobs</NavLink>

            <NavLink exact="true" to={'/login'}>Log In</NavLink>
            <NavLink exact="true" to={'/signup'}>Sign Up</NavLink>
            <NavLink exact="true" to={'/edit'}>Edit Profile</NavLink>
            <NavLink exact="true" to={'/logout'}>Log Out</NavLink>

        </div>
    )


}

export default NavBar;