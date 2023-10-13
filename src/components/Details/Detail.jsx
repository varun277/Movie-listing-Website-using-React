import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import { useLocation } from 'react-router-dom';
import './Detail.css'
import BackButton from '../BackButton';
import {CalendarBlank,Clock,Eye,Play} from "@phosphor-icons/react";

function Detail() {
  const getdata2=localStorage.getItem('id')
  const output2=JSON.parse(getdata2)
  console.log(output2)
  const fetch1=useLocation()
  const getDetail=fetch1.state;
//   console.log(getDetail)
  const fetchDetail=output2.filter((obj)=>obj['title'].includes(getDetail));
  console.log(...fetchDetail)
  const cv=fetchDetail.map(o=>o['genres'])
  const gen=cv[0][0]
  const genremovie=output2.filter((list1)=>list1['genres'].includes(gen));
  // console.log(genremovie)

  const [displayText,setDisplayText]=useState(false)
  const handleClick =()=>{
    setDisplayText(true)
  }
  const playYoutube=()=>{
    const VIDEO='-uCrUACfwpw';
    window.location.href=`https://www.youtube.com/watch?v=${VIDEO}`;
  }


  return (
    <div>
     <BackButton/>
      {
        fetchDetail.map((obj1)=>
        <div className='container' >
        <div className='poster-details'>
        <h1>{obj1['title']}</h1>
        <p><b><CalendarBlank size={14}/>&nbsp;</b>{obj1['year']}&nbsp;&nbsp;&nbsp;<b><Clock size={14} />&nbsp; </b>{obj1['runtime']} min</p> 
        <p><b>{obj1['genres'].join(" | ")} </b></p>
        <p>{obj1['plot']}</p>
        <div className='buttons'>
          <button className='red-btn' onClick={playYoutube}><Play size={10} />Play Now</button><button className='yellow-btn' onClick={playYoutube}><Eye size={10}/>Watch Trailer</button>
        </div>
        </div>
        <img src={obj1['posterUrl']}  alt="posterimg" onError={(e)=>{e.target.src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}} />
        </div>
        )
      }
      <h4 id='tag'>You may like</h4>
      <div className='rail1'>
        {
          genremovie.map((movie)=>
          <div className='rail-movie'>
          <img src={movie['posterUrl']} alt="movie" onError={(e)=>{e.target.src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}} />
          <h6>{movie['title']}</h6>
          </div>
        )
        }
        </div>
    </div>
  )
}

export default Detail
