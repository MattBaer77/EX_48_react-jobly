import React, {useContext} from "react";

import UserContext from "./UserContext";

import { NavLink } from "react-router-dom";

function NavBar() {

    const {currentUser} = useContext(UserContext)

    if (currentUser.token) {

        return(
            <div className="NavBar">
    
                <NavLink exact="true" to={'/companies'}>Companies</NavLink>
                <NavLink exact="true" to={'/jobs'}>Jobs</NavLink>
    
                <NavLink exact="true" to={'/edit'}>Edit Profile</NavLink>
                <NavLink exact="true" to={'/logout'}>Log Out {currentUser.username}</NavLink>
    
            </div>
        )

    }

    return(
        <div className="NavBar">

            <NavLink exact="true" to={'/login'}>Log In</NavLink>
            <NavLink exact="true" to={'/signup'}>Sign Up</NavLink>

        </div>
    )

}

export default NavBar;