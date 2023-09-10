import style from "./Sidecard.module.css";
import moment from 'moment';
import numeral from "numeral";
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function SideCard({card_data}:any) {
     const navigate = useNavigate();
     const greyFontSize = "12px";
     const {title,channelTitle,publishedAt} = card_data.snippet;
     const thumbnail = card_data.snippet.thumbnails.standard?.url;    
     const {viewCount} = card_data.statistics;
     const { id } = card_data;
     const view_abbreviation_count  = numeral(+viewCount).format('0a').toLocaleUpperCase(); 
     const handleRedirect = () => {
      navigate(`/watch?v=${id}`);
    };
    

  return (
    <Box onClick={handleRedirect} className={style.main_sidecard_parent}>
    <Box className={style.main_sidecard} >
         <Box className={style.thumbnail} component={"img"} src = {thumbnail}>
         </Box>
         <Box className={style.sidecard_right}>
            <Box className={style.title}>{title}</Box>
            <Box fontSize={greyFontSize} className={style.channe_name}>{channelTitle}</Box>
            <Box fontSize={greyFontSize} className={style.views_and_published}>
                <Box>{view_abbreviation_count} views</Box>
                <Box className={style.dot_parent}>
                    <Box className={style.dot}></Box>
                </Box>
                <Box>{moment(publishedAt).fromNow() == "a day ago" ? "1 day ago" : moment(publishedAt).fromNow()}</Box>
                </Box>
        </Box>   
    </Box>
  </Box>
  )
}

export default SideCard;