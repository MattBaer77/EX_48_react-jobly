import React, {useContext} from "react";

import { Navigate} from "react-router-dom";

import UserContext from "./UserContext";

const Logout = () => {

    const {logout} = useContext(UserContext)

    logout()

    return (

        <Navigate to={'/'} />

    )

}

export default Logout;