
import './App.css';
// import Rowposter from './components/Rposter/Rowposter';
// import Navbar from './components/navbar/Navbar';
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
// import Data from "./components/Data"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/SearchImp/Search';
import Home from './components/Home';
import Detail from './components/Details/Detail';



function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/detail" element={<Detail />}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
