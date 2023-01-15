import {useEffect, useState} from "react";
import styles from "./Home.module.css";
import {
    Box,
  } from "@mui/material";
import Card from '../../Components/Card/Card';

const api_key = import.meta.env.VITE_API_KEY;
const number_of_videos = 50;
const youtube_api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${api_key}&maxResults=${number_of_videos}`;


export const Home = ()=>{
    const [videos_data,set_video_data] = useState([]);
    const get_trending_videos=()=>{
        fetch(youtube_api)
        .then((res)=>{
            res.json().then((res)=>{
                set_video_data(res.items);
            })
            .catch((err)=>{
                console.log(err);
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
   

    useEffect(()=>{
        get_trending_videos();
    },[])

    return <>
        <Box className={styles.home_container}>
            {videos_data.map((el:any)=>{
                return <Card card_data={el}/>
            })}
        </Box>
    </>
}

export default Home