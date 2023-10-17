import React, {useContext, useState} from "react";

// import JoblyApi from "./Api.js"

import UserContext from "./UserContext.js";

import './StandAloneForm.css'

const SignupForm = () => {

    const {signup} = useContext(UserContext)

    const INITIAL_STATE = {

        username:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""

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

            await signup(userInput)
            setError(null)

        } catch (e) {

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

            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name: </label>
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email: </label>
            <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
            />

            <button>Sign Up!</button>

        </form>

        </div>

    )

















}

export default SignupForm;