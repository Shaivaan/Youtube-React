import {useEffect} from "react";
import { Box } from '@mui/material'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './Router/Home';
import SearchScreen from "./Router/SearchScreen";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

  const end_point = window.location.pathname;
  const is_sidebar_visible =  end_point == "/" || end_point == "/search" ? <Sidebar/> : "" ;
  const is_navbar_visible = ()=>{
    const end_point_arr = ["/","/search"];
    if(end_point_arr.includes(end_point)){
      return true;
    }
    return false;
  }

  return (
   <Box>
      {is_navbar_visible() && <Navbar/>}
    <Box>
    {is_sidebar_visible}
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/search" element={<SearchScreen/>}/>
        <Route path="*" element={"Will se later"}/>
     </Routes>
     </Box>
   </Box>
  )
}

export default App;