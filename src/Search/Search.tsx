import React,{useState,useEffect} from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import styles from "./Search.module.css";
import SearchVideo from '../Components/SearchVideo/SearchVideo';

const api_key = import.meta.env.VITE_API_KEY;
const search_vide_url =(keyword:string) => `https://youtube.googleapis.com/youtube/v3/search?&q=${keyword}&key=${api_key}&type=video&maxResults=25&part=snippet`;
const channel_data_api = (channel_id: any) =>
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${api_key}`;

function Search() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const keyword:any = params.get("search_query");
    const [searched_data,set_search_data] = useState([]);
    const [avatar_data, set_avatar_data] = useState<any>([]);
    const get_search_video = ()=>{
        fetch(search_vide_url(keyword))
        .then((res)=>{
            res.json().then((res)=>{
                set_search_data(res.items);
                get_avatar_data(res.items);
            })
            .catch((res)=>{
                console.log(res);
            })
        })
        .catch((res)=>{
            console.log(res);
        })
    }

    const get_avatar_data = (searched_data: any) => {
        searched_data.length != 0 &&
          searched_data.map((el: any) => {
            fetch(channel_data_api(el.snippet.channelId))
              .then((res) => {
                res
                  .json()
                  .then((res) => {
                    set_avatar_data((prev: any) => [...prev, res.items[0]]);
                  })
                  .catch((res) => {
                    console.log(res);
                  });
              })
              .catch((res) => {
                console.log(res);
              });
          });
      };

    useEffect(()=>{
      !keyword && navigate("/")
        get_search_video();
    },[keyword]);


  return (
     <Box className={styles.search_page_parent}>   
       {searched_data?.length !== 0 && searched_data?.map((el:any,index:number)=>{
        return <SearchVideo channel_data={
          avatar_data.filter(
            (item: any) => item.id == el.snippet.channelId
          )[0]
        } card_data={el} key={index}/> 
       })}
        
     </Box>   
  )
}

export default Search;