import React from 'react'
import { useNavigate} from 'react-router-dom'
import './BackButton.css'
import {ArrowLeft} from "@phosphor-icons/react"



const BackButton = () => {
    const navigate=useNavigate()
    const goToHome=()=>{
        navigate(-1);
    }
  return (
    
    <div className='button'>
    <button className='bck-btn' onClick={()=>goToHome()}><ArrowLeft size={14} /> Back</button>
    </div>
    
  )
}

export default BackButton