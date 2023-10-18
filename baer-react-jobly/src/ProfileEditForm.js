import React, {useContext, useState} from "react";

import { useNavigate, Navigate } from "react-router-dom";

import UserContext from "./UserContext.js";

import './StandAloneForm.css'

const ProfileEditForm = () => {

    const navigate = useNavigate()

    const {currentUser, edit} = useContext(UserContext)

    if (!currentUser.token) {

        return <Navigate to='/login'/>

    }

    const INITIAL_STATE = {

        firstName:currentUser.firstName,
        lastName:currentUser.lastName,
        email:currentUser.email

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
        let userInput = {...formData}

        console.log(userInput)

        try {

            console.log(currentUser.username)

            await edit(userInput, currentUser.username)
            setError(null)
            navigate('/')

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
                placeholder={currentUser.username}
                name="username"
                id="username"
                readOnly="readonly"
                onFocus={(e) => {
                    e.preventDefault()
                    document.getElementById("username").blur();
                }}
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

            <button>Edit Profile</button>

        </form>

        </div>

    )

}

export default ProfileEditForm;