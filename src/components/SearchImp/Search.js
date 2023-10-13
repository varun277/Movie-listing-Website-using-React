// import React from 'react'
// import Navbar from '../navbar/Navbar';
// import BackButton from '../BackButton';
// import { useLocation } from 'react-router-dom';
// import './Search.css';


// function Search() {
//   const getdata2=localStorage.getItem('id')
//   const output2=JSON.parse(getdata2)
//   console.log(output2)
//   const loc=useLocation()
//   const typed1=loc.state;
//   const typed=typed1 == null ? alert("Please enter a movie name") : typed1.toLowerCase()
  
//   console.log(typed)
//   const filtered=output2.filter(obj=>obj['title'].toLowerCase().includes(typed))
//   console.log(filtered)
//   return (
//     <div>
//     {/* <Navbar />  */}
//     <BackButton/>
//     <div className='new-row'>
//     <h4>Movies & TV</h4>
//     <div className='image-row'>
//     {
//       filtered.map((ob)=>
     
     
//       )
//     }
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Search
