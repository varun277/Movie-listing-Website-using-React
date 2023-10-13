
import './App.css';
// import Rowposter from './components/Rposter/Rowposter';
// import Navbar from './components/navbar/Navbar';
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
// import Data from "./components/Data"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/SearchImp/Search';
import Home from './components/Home';
import Detail from './components/Details/Detail';
import Login from './components/Login/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import { Details } from '@mui/icons-material';
import ProtectedRoutes1 from './ProtectedRoutes1';





function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        {/* <ProtectedRoutes exact path="/home" component={<Home/>}/> */}
        <Route path="/" element={<Login/>}/>
        <Route path='/home' element={<ProtectedRoutes><Home /></ProtectedRoutes>}/>
        {/* <Route path="/search" element={<Search />}/> */}
        <Route path="/detail" element={<ProtectedRoutes1><Detail/></ProtectedRoutes1>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
