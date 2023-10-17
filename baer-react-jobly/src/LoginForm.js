import React, {useContext, useState} from "react";

// import JoblyApi from "./Api.js"

import UserContext from "./UserContext.js";

import './StandAloneForm.css'

const LoginForm = () => {

    const {login} = useContext(UserContext)

    // console.log(currentUser)
    // console.log(login)

    const INITIAL_STATE = {

        username:"",
        password:""

    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [error, setError] = useState(null)

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData((data) => {

            return {
                ...data,
                [name]:value
            }

        })

    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        const userInput = {...formData}
        console.log(userInput)

        try {

            await login(userInput)
            setError(null)

        } catch(e) {

            console.log(e)
            setError(e)
        }


    }

    return (

        <div className="StandAloneForm">
            
        <p className="Error">{error}</p>

        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username: </label>
            <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Password: </label>
            <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
            />

            <button>Login</button>

        </form>

        </div>

    )

















}

export default LoginForm;