import React, {useState, useEffect} from 'react';
import UserContext from './UserContext';

import JoblyApi from './Api';
import jwtDecode from 'jwt-decode';

const UserProvider = ({children}) => {

    console.log("IN CONTEXT - UserProvider")

    const localStorage = window.localStorage

    const INITIAL_STATE = {}

    const [currentUser, setCurrentUser] = useState(INITIAL_STATE)

    console.log(currentUser)

    const loadUser = async (token) => {

        const {username} = jwtDecode(token)

        console.log("USER INFO FROM TOKEN-")
        console.log(jwtDecode(token))

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

        localStorage.setItem('token', token)

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

    const signup = async (userInput) => {

        console.log(userInput)

        try {

            const token = await JoblyApi.signUpUser(userInput)

            console.log(userInput)

            loadUser(token)
    
        } catch (e) {
            throw e
        }
  
    }

    const edit = async (userInput, username) => {

        console.log(userInput)

        try {

            await JoblyApi.editUser(userInput, username)

            console.log(userInput)

            loadUser(currentUser.token)
    
        } catch (e) {
            throw e
        }
  
    }

    const apply = async (id, username) => {

        console.log(id)
        console.log(username)

        try {

            const msg = await JoblyApi.applyJob(id, username)

            console.log(msg)

            loadUser(currentUser.token)

        } catch (e) {
            throw e
        }

    }

    const logout = async () => {

        setCurrentUser(INITIAL_STATE)
        localStorage.clear()

    }

    const storedToken = localStorage.getItem('token')

    console.log(storedToken)

    useEffect(() => {

        if (storedToken) {
            loadUser(storedToken)
        }

    },[])

    return (
        <UserContext.Provider value={{currentUser, login, signup, edit, apply, logout}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;