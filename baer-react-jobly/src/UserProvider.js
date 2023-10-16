import React, {useState} from 'react';
import UserContext from './UserContext';

import JoblyApi from './Api';

const UserProvider = ({children}) => {

    console.log("contexting")

    const INITIAL_STATE = {
        userName:"",
        token:"",
        apiHelper:""
    }

    const [currentUser, setCurrentUser] = useState(INITIAL_STATE)

    console.log(currentUser)

    const login = async (userInfo) => {

        console.log(userInfo)

        const token = await JoblyApi.loginUser(userInfo)

        console.log(userInfo)

        if (token) {

            console.log(userInfo)

            const helper = JoblyApi;

            helper.token = token;

            setCurrentUser(() => {

                console.log(userInfo)

                return {

                    userName:userInfo.username,
                    token:token,
                    apiHelper:helper

                }

            })

        }
  
    }

    return (
        <UserContext.Provider value={{currentUser, login}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;