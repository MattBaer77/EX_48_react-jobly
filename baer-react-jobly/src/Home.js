import React, {useContext} from "react";

import UserContext from "./UserContext";

import { NavLink } from "react-router-dom";

const Home = () => {

    const {currentUser} = useContext(UserContext)

    if(currentUser.token){

        return (

            <div>

                <span>Welcome back {currentUser.username}!</span>

            </div>

        )
    }

    return (

        <div>
            <span>No Job? - No worries...</span>
                <NavLink exact="true" to={'/login'}> Login </NavLink>
            <span>to get started.</span>
        </div>

    )

};

export default Home;