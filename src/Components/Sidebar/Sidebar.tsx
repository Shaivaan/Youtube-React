import React from 'react';
import { Box } from '@mui/material';
import { AiFillHome, AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import styles from "./Sidebar.module.css";
import { drwaer_opener_text, icon_default_size } from "../../assets/sizes";

function Sidebar() {
  return (
       <Box className={styles.drawer_opener}>
        <Box className={styles.drawer_opener_options}>
          <AiFillHome fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Home</Box>
        </Box>
        <Box className={styles.drawer_opener_options}>
          <AiOutlinePlayCircle fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Shorts</Box>
        </Box>
        <Box className={styles.drawer_opener_options}>
          <MdOutlineSubscriptions fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Subscription</Box>
        </Box>
        <Box className={styles.drawer_opener_options}>
          <MdOutlineVideoLibrary fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Library</Box>
        </Box>
      </Box> 
  )
}

    
export default Sidebar;