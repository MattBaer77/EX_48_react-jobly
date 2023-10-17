import React, {useContext, useEffect, useState} from "react";

import { Navigate} from "react-router-dom";

import "./List.css"
import UserContext from "./UserContext";

const Logout = () => {

    const {logout} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        logout()
        setIsLoading(false)

    }, [])


    if (!isLoading) {

        return (

            <Navigate to={'/'} />
    
        )

    } else {

        return (

            <div className="List">

                <h2>Logging out...</h2>

            </div>

        )
    }

}

export default Logout;