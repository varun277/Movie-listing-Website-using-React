import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({Children}) => {
    const localdata=localStorage.getItem('usernameData');
    console.log(localdata)
    if(localdata=='abc@gmail.com'){
        
        return Children;
    }
    else{
        console.log("hi2")
        return <Navigate to="/" />
        
    }
 

}

export default ProtectedRoutes