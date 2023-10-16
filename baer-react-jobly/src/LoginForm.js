import React, {useState} from "react";

import JoblyApi from "./Api.js"

import './StandAloneForm.css'

const LoginForm = () => {

    const INITIAL_STATE = {

        username:"",
        password:""

    }

    const [formData, setFormData] = useState(INITIAL_STATE);

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
        const userInfo = {...formData}

        console.log(userInfo)

        const token = await JoblyApi.loginUser(userInfo)

        console.log(token)

    }

    return (

        <div className="StandAloneForm">

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