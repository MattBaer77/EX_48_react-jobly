import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Home from './Home'
import CompaniesList from './CompaniesList'
import CompanyDetail from './CompanyDetail'
import JobsList from './JobsList'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import ProfileEditForm from './ProfileEditForm'
import Logout from './Logout'
// import ProfileEditForm from './ProfileEditForm'

const Router = () => {

    return(

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/companies" element={<CompaniesList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />

          <Route path="/jobs" element={<JobsList />} />

          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/edit" element={<ProfileEditForm />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/profile" element={<ProfileEditForm />} /> */}
    
          <Route path="*" element={<Navigate to='/' />}/>
          
        </Routes>

    )

}

export default Router;