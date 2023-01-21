import React, { useState } from "react";
import style from "./PlayVideo.module.css";
import { Avatar, Box, Button, makeStyles, Theme, withStyles } from "@mui/material";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { sidebar_icon_size } from "../../assets/sizes";
import SideCard from "../../Components/Card/SideCard";


function PlayVideo() {
  const [isShowMore, setShowMore] = useState(false);
  const seeMoreToggler = () => {
    setShowMore(!isShowMore);
  };


  return (
    <Box className={style.play_video_parent}>
      <Box className={style.video_container}>
        <Box>
          <iframe
            className={style.video_iframe}
            src="https://www.youtube.com/embed/pq9U3gURqw8"
            title="Marcos Edit | Excuses x Marine Commando | Marcos status #edit #india #marcos #parasfcommando #trend"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
        <Box className={style.video_title}>
          Is Time Travel Possible? | @Round2hell | Netflix India
        </Box>
        <Box className={style.channel_about_container}>
          <Box className={style.channel_detail_container}>
            <Box>
              <Avatar className={style.channel_logo} src={""} />
            </Box>
            <Box className={style.name_and_subscriber}>
              <Box>Channel Title</Box>
              <Box className={style.subscriber_video_card}> Subscriber</Box>
            </Box>
            <Box>
              <button className={style.subscribe_button}>Subscribe</button>
            </Box>
          </Box>
          <Box className={style.like_and_dislike_section}>
            <Box className={style.rounded_background}>
              <AiOutlineLike fontSize={sidebar_icon_size} /> 11K
            </Box>
            <Box className={style.rounded_background}>
              <BiDislike fontSize={sidebar_icon_size} />
            </Box>
            <Box className={style.rounded_background}>
              <RiShareForwardLine fontSize={sidebar_icon_size} /> Share
            </Box>
            <Box className={style.rounded_background}>
              <BsThreeDots fontSize={sidebar_icon_size} />
            </Box>
          </Box>
        </Box>

        <Box className={style.toggler_parent}>
          <Box
            className={
              isShowMore
                ? style.description_box_less
                : style.description_box_more
            }
          >
            Coding invader's Batch :- https://bit.ly/3GBwv1V Use Code "DHRUV20"
            for 20% fee discount in job guarantee batch Only for first 250
            candidates in this Republic day occasion Today, the phrase "Akhand
            Bharat" is used as a political tool, but have you ever wondered what
            may have happened if India and Pakistan had never been divided in
            1947? Where would the nation be in terms of development ? In this
            video, Dhruv Rathee discusses the partition, how it could have been
            avoided, and whether or not stopping the separation would have
            significantly changed the current state of the affected nations.
          </Box>
          <Box component={"span"}>
            <Button
              style={{color:"black",textDecoration: "none", textTransform: "none" }}
             
              onClick={seeMoreToggler}
            >
              see more
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={style.video_list_container}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el) => {
          return <SideCard />;
        })}
      </Box>
    </Box>
  );
}



  
export default PlayVideo;
