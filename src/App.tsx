import { Box } from '@mui/material'
import Navbar from './Components/Navbar/Navbar'
import {useEffect, useState} from "react";
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './Router/Home/Home';
import SearchScreen from "./Router/SearchScreen";
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from "./App.module.css";
import PlayVideo from './Router/PlayVideo/PlayVideo';
import RandomScreen from './Router/RandomScreen/RandomScreen';

function App() {
  const location = useLocation();
  const [end_point, set_current_point] = useState(location.pathname);
  const is_sidebar_visible =  end_point == "/" || end_point == "/search" ? <Sidebar/> : "" ;
  const is_navbar_visible = ()=>{
    const end_point_arr = ["/","/search","/watch"];
    if(end_point_arr.includes(end_point)){
      return true;
    }
    return false;
  }

  useEffect(()=>{
    set_current_point(location.pathname);
  },[location]);

  return (
   <Box>
      {is_navbar_visible() && <Navbar/>}
    <Box>
       <Box className={styles.content_container}>
    {is_sidebar_visible}
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/search" element={<SearchScreen/>}/>
        <Route path="/watch" element={<PlayVideo/>}/>
        <Route path="*" element={<RandomScreen/>}/>
     </Routes>
       </Box>
     </Box>
   </Box>
  )
}

export default App;