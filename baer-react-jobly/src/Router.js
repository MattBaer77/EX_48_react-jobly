import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Home from './Home'
import CompanyList from './CompanyList'

const Router = () => {

    return(

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/companies" element={<CompanyList />} />
          {/* <Route path="/companies/:handle" element={<CompanyDetail />} /> */}

          {/* <Route path="/jobs" element={<JobList />} /> */}

          {/* <Route path="/login" element={<LoginForm />} /> */}
          {/* <Route path="/signup" element={<SignupForm />} /> */}
          {/* <Route path="/profile" element={<ProfileEditForm />} /> */}
    
          <Route path="*" element={<Navigate to='/' />}/>
          
        </Routes>

    )

}

export default Router;