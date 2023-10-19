import React, {useState, useEffect} from 'react';
import UserContext from './UserContext';

import JoblyApi from './Api';
import jwtDecode from 'jwt-decode';

const UserProvider = ({children}) => {

    const localStorage = window.localStorage

    const INITIAL_STATE = {}

    const [currentUser, setCurrentUser] = useState(INITIAL_STATE)

    const loadUser = async (token) => {

        const {username} = jwtDecode(token)

        const apiHelper = JoblyApi;
        apiHelper.token = token;
        const { user } = await apiHelper.getUserInfo(username)

        setCurrentUser(() => {

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

        try {

            const token = await JoblyApi.loginUser(userInput)

            loadUser(token)
    
        } catch (e) {
            throw e
        }
  
    }

    const signup = async (userInput) => {

        try {

            const token = await JoblyApi.signUpUser(userInput)

            loadUser(token)
    
        } catch (e) {
            throw e
        }
  
    }

    const edit = async (userInput, username) => {

        try {

            await JoblyApi.editUser(userInput, username)

            loadUser(currentUser.token)
    
        } catch (e) {
            throw e
        }
  
    }

    const apply = async (id, username) => {

        try {

            await JoblyApi.applyJob(id, username)

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