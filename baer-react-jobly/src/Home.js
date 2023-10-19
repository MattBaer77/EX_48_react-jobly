import React, {useContext} from "react";

import UserContext from "./UserContext";

import { NavLink } from "react-router-dom";

const Home = () => {

    const {currentUser} = useContext(UserContext)

    if(currentUser.token){

        return (

            <div className="List">

            <div className="Card center">

                <h1>Welcome back {currentUser.firstName}!</h1>
                <h3>Start browsing: </h3>
                <div><NavLink exact="true" to={'/companies'}>Companies</NavLink></div>
                <div><NavLink exact="true" to={'/jobs'}>Jobs</NavLink></div>

            </div>

            </div>

        )
    }

    return (

        <div className="List">

        <div className="Card center">
            <h1>No Job? - No worries...</h1>
                <NavLink exact="true" to={'/login'}> Login </NavLink>
            <span>to get started.</span>
        </div>

        </div>

    )

};

export default Home;