import React, {useState} from 'react';
import UserContext from './UserContext';

import JoblyApi from './Api';
import jwtDecode from 'jwt-decode';

const UserProvider = ({children}) => {

    console.log("IN CONTEXT - UserProvider")

    const INITIAL_STATE = {
        username:"",
        token:"",
        apiHelper:"",
        firstName:"",
        lastName:"",
        email:"",
        applications:[]
    }

    const [currentUser, setCurrentUser] = useState(INITIAL_STATE)

    console.log(currentUser)

    const loadUser = async (token) => {

        const {username} = jwtDecode(token)
        const apiHelper = JoblyApi;
        apiHelper.token = token;
        const { user } = await apiHelper.getUserInfo(username)

        setCurrentUser(() => {

            console.log(user)
            return {
                username : user.username,
                token : token,
                apiHelper : apiHelper,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                applications : user.applications
            }
            
        });

    }

    const login = async (userInput) => {

        console.log(userInput)

        try {

            const token = await JoblyApi.loginUser(userInput)

            console.log(userInput)

            loadUser(token)
    
        } catch (e) {
            throw e
        }
  
    }

    return (
        <UserContext.Provider value={{currentUser, login}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;