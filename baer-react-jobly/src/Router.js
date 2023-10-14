import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Home from './Home'
import CompaniesList from './CompaniesList'
import JobsList from './JobsList'

const Router = () => {

    return(

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/companies" element={<CompaniesList />} />
          {/* <Route path="/companies/:handle" element={<CompanyDetail />} /> */}

          <Route path="/jobs" element={<JobsList />} />

          {/* <Route path="/login" element={<LoginForm />} /> */}
          {/* <Route path="/signup" element={<SignupForm />} /> */}
          {/* <Route path="/profile" element={<ProfileEditForm />} /> */}
    
          <Route path="*" element={<Navigate to='/' />}/>
          
        </Routes>

    )

}

export default Router;