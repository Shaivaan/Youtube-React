import React from 'react';
import style from "./Sidecard.module.css";
import { Box } from '@mui/material';

function SideCard() {
     const greyFontSize = "12px";
  return (
    <Box className={style.main_sidecard}>
         <Box className={style.thumbnail} component={"img"} src = {"https://i.ytimg.com/vi/kZJISbK3bu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDzUWkrxmoi2845xZuCSg0dH_VzuA"}>
           
         </Box>
         <Box className={style.sidecard_right}>
            <Box className={style.title}>Taaraks Mehta ka ooltahs chasma ooltahs chasma ooltahs chasma</Box>
            <Box fontSize={greyFontSize} className={style.channe_name}>Channel Name</Box>
            <Box fontSize={greyFontSize} className={style.views_and_published}>
                <Box>15M views</Box>
                <Box className={style.dot_parent}>
                    <Box className={style.dot}></Box>
                </Box>
                <Box>3 days ago</Box>
                </Box>
        </Box>   
    </Box>
  )
}

export default SideCard;