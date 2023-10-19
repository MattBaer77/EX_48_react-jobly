import React, {useContext} from "react";

import UserContext from "./UserContext";

import { NavLink } from "react-router-dom";

const Home = () => {

    const {currentUser} = useContext(UserContext)

    if(currentUser.token){

        return (

            <div>

                <span>Welcome back {currentUser.firstName}!</span>

            </div>

        )
    }

    return (

        <div>
            <div>No Job? - No worries...</div>
                <NavLink exact="true" to={'/login'}> Login </NavLink>
            <span>to get started.</span>
        </div>

    )

};

export default Home;