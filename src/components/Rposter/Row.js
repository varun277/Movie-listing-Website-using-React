import React, { useState } from 'react'
import './Row.css'
import { useNavigate } from 'react-router-dom';


function Row(props) {
        const [detail,setDetail]=useState("")
        const category1=props.category;
        const movie1=props.movie;
        const FilteredMovie=movie1.filter((mov)=>
            mov['genres'].includes(category1)
        )  
        const navigate=useNavigate()
        // console.log(category1);
        // console.log(FilteredMovie);
        const Detailpage =(e)=>{
          const x=e.target.id;
          setDetail(x)
          console.log(x)
          navigate("/detail",{state:x})
        }
        console.log(detail)
  return (
    <div className='rails'>
    {
      FilteredMovie.map((obj1)=>
      <div className='rail'>
        <img  id={obj1['title']} className='card' src={obj1['posterUrl'] } onError={(e)=>{e.target.src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} } onClick={Detailpage}/>
        <h6>{obj1['title']}</h6>
      </div>)
    }
    </div>
  )
}

export default Row
