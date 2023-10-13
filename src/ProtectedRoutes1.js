import React from 'react'
import { Navigate } from 'react-router-dom';


const ProtectedRoutes1 = ({children}) => {
    const localdata=localStorage.getItem('usernameData');
    console.log(localdata)
    if(localdata=='abc@gmail.com'){

        
        return children
    }
    else{
        console.log("hi2")
        return <Navigate to="/" />
        
    }
 

}

export default ProtectedRoutes1