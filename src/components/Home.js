import { useState } from 'react'
import React from 'react'
import Navbar from './navbar/Navbar'
import Rowposter from './Rposter/Rowposter'
import ProtectedRoutes from './ProtectedRoutes';



 function Home() {
  const [searchedData,getSearchedData]=useState("");
  return (
    <div>
    <Navbar value={getSearchedData} />
    <ProtectedRoutes />
    <Rowposter value={searchedData} />
    </div>
  )
}
export default Home