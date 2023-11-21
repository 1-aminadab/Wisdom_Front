import React, { useState } from 'react'
import "./Registration.css";
import TeacherRegistrationForm from '../../components/registration_forms/TeacherSignupForm';
import SignupIntry from './SignupIntry'
function Registration() {
   let [userType, setUserType ] = useState(null)

   const setType = (type)=>{
        setUserType(type)
   }
    if (userType ===  null) return <SignupIntry getType={setType}/>
    return <TeacherRegistrationForm userType = {userType} />
   // if(userType === "parent") return <ParentRegistrationForm />
}

export default Registration