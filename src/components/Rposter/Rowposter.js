import React,{useEffect,useState} from 'react'
import "./Rowposter.css";
import axios from 'axios';
import Row from '../Rposter/Row'


function Rowposter() {

    // const Genmovie=[];
    const [movies, setMovies] = useState([]); 
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        axios.get('https://test.create.diagnal.com/data/db.json').then((res)=>{
            console.log(res.data);            
            setMovies(res.data["movies"]);
            console.log(movies);
            const store=JSON.stringify(res.data['movies'])
            localStorage.setItem('id',store)
            setGenre(res.data["genres"]);
        })
        },[]);
  return (
    <div className='row'>
    <div className='posters'>
    {   
        genre.map((obj)=>
            <div className='rail'>
            <h4>{obj}</h4>
            <div>
            <Row category={obj} movie={movies} />
            </div>
            </div>
        )
       
    }
    </div>
    </div>
    )
}

export default Rowposter
