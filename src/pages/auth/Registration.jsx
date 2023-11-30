import React, { useState } from 'react'
import "./Registration.css";
import SignupForm from '../../components/forms/SignupForm';
import SignupIntry from './SignupIntry'
function Registration() {
   let [userType, setUserType ] = useState(null)

   const setType = (type)=>{
        setUserType(type)
   }
    if (userType ===  null) return <SignupIntry getType={setType}/>
    return <SignupForm userType = {userType} />
   // if(userType === "parent") return <ParentRegistrationForm />
}

export default Registration