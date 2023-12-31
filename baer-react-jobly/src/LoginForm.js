import React, {useContext, useState} from "react";

import { useNavigate, Navigate } from "react-router-dom";

import UserContext from "./UserContext.js";

import './StandAloneForm.css'

const LoginForm = () => {

    const navigate = useNavigate()

    const {currentUser, login} = useContext(UserContext)

    const INITIAL_STATE = {

        username:"",
        password:""

    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [error, setError] = useState(null)

    if (currentUser.token) {

        return <Navigate to='/'/>

    }

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

        try {

            await login(userInput)
            setError(null)
            navigate('/')

        } catch(e) {

            setError(e)
        }

    }

    return (

        <div className="List">

        <div className="Card StandAloneForm">
            
        {error && <p className="Error">{error}</p>}

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
        </div>

    )

}

export default LoginForm;