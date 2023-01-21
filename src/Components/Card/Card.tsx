import React from 'react';
import { Box, Avatar } from '@mui/material';
import style from "./Card.module.css";
import moment from 'moment';
import numeral from "numeral";
import { useNavigate } from 'react-router-dom';

function Card({card_data}:any) {

    const navigate = useNavigate();
    const {title,channelTitle,publishedAt} = card_data.snippet;
    const thumbnail = card_data.snippet.thumbnails.standard.url;    
    const {viewCount} = card_data.statistics;
    const {id} = card_data;
    const view_abbreviation_count  = numeral(+viewCount).format('0a').toLocaleUpperCase(); 
    const handleRedirect =()=>{
          navigate(`/watch?v=${id}`);
    }

  return (
    <Box className={style.card_style} onClick={handleRedirect}>
        <Box >
            <img className={style.thumb_nail} src = {thumbnail}/>
        </Box>
        <Box className={style.bottom_card_container}>
            <Box className={style.avatar_container}><Avatar className={style.avatar_style} src='https://yt3.ggpht.com/TIAkjYaTWw6bvfRLjF3Q05MdVelP-P8qvZRuytN2i3uZY2aCwM3Oy-ITmYGNi0SFbCJ8ZJqmpw=s68-c-k-c0x00ffffff-no-rj'/></Box>
            <Box className={style.content_container}>
                <Box className={style.title_style}>{title}</Box>
                <Box className={style.name_and_view_container}>
                <Box className={style.channel_name}>{channelTitle}</Box>
                <Box className={style.views_and_published}>
                <Box>{view_abbreviation_count} views</Box>
                <Box className={style.dot_parent}>
                    <Box className={style.dot}></Box>
                </Box>
                <Box>{moment(publishedAt).fromNow() == "a day ago" ? "1 day ago" : moment(publishedAt).fromNow()}</Box>
                </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Card

