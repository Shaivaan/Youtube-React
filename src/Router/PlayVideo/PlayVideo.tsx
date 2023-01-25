import { useEffect, useState } from "react";
import style from "./PlayVideo.module.css";
import { Avatar, Box, Button } from "@mui/material";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { sidebar_icon_size } from "../../assets/sizes";
import SideCard from "../../Components/Card/SideCard";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

function PlayVideo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [video_data, set_video_data] = useState<any>();
  const [channel_data, set_channel_data] = useState<any>();
  const [side_videos,set_side_videos] = useState<any>([]);
  const [isShowMore, setShowMore] = useState(true);
  const number_of_videos = 50;
  const seeMoreToggler = () => {
    setShowMore(!isShowMore);
  };
  const params = new URLSearchParams(location.search);
  const id = params.get("v");
  const api_key = import.meta.env.VITE_API_KEY;
  const video_detail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`;
  const youtube_api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${api_key}&maxResults=${number_of_videos}`;


  useEffect(() => {
    isIdValid(id);
  }, [id]);

  const isIdValid = (id: any) => {
    if (!id) {
      navigate("/");
    } else {
      getVideoData();
      get_trending_videos();
    }
  };

  const getVideoData = () => {
    fetch(video_detail_url)
      .then((res) => {
        res
          .json()
          .then((res) => {
            set_video_data(res.items[0]);
            getChannelData(res.items[0].snippet.channelId);
          })
          .catch((res) => {
            console.log(res);
          });
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const getChannelData = (channel_id: any) => {
    const channel_details_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${api_key}`;

    fetch(channel_details_url)
      .then((res) => {
        res
          .json()
          .then((res) => {
            set_channel_data(res.items[0]);
          })
          .catch((res) => {
            console.log(res);
          });
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const get_trending_videos=()=>{
    fetch(youtube_api)
    .then((res)=>{
        res.json().then((res)=>{
          set_side_videos(res.items);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}


  return (
    <Box className={style.play_video_parent}>
      <Box className={style.video_container}>
        <Box>
          <iframe
            className={style.video_iframe}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Box className={style.video_title}>{video_data?.snippet?.title}</Box>
        <Box className={style.channel_about_container}>
          <Box className={style.channel_detail_container}>
            <Box>
              <Avatar
                className={style.channel_logo}
                src={channel_data?.snippet?.thumbnails?.high?.url}
              />
            </Box>
            <Box className={style.name_and_subscriber}>
              <Box>{video_data?.snippet?.channelTitle}</Box>
              <Box className={style.subscriber_video_card}>
                {" "}
                {numeral(+channel_data?.statistics?.subscriberCount)
                  .format("0a")
                  .toLocaleUpperCase()}{" "}
                subscribers
              </Box>
            </Box>
            <Box>
              <button className={style.subscribe_button}>Subscribe</button>
            </Box>
          </Box>
          <Box className={style.like_and_dislike_section}>
            <Box className={style.rounded_background}>
              <AiOutlineLike fontSize={sidebar_icon_size} />
              {numeral(+video_data?.statistics?.likeCount)
                .format("0a")
                .toLocaleUpperCase()}
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
          <Box className={style.views_and_sub}>
            <Box component={"span"}>
              {numeral(+video_data?.statistics?.viewCount)
                .format("0a")
                .toLocaleUpperCase()}{" "}
              views
            </Box>
            <Box component={"span"}>{" "}</Box>
            <Box component={"span"}>
              {moment(video_data?.snippet.publishedAt).fromNow() == "a day ago"
                ? "1 day ago"
                : moment(video_data?.snippet.publishedAt).fromNow()}
            </Box>
          </Box>
          <Box
            className={
              isShowMore
                ? style.description_box_less
                : style.description_box_more
            }
          >
            {video_data?.snippet?.description}
          </Box>
          <Box component={"span"}>
            <Button
              style={{
                color: "black",
                textDecoration: "none",
                textTransform: "none",
              }}
              onClick={seeMoreToggler}
            >
              {isShowMore ? "see more" : "see less"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={style.video_list_container}>
        {side_videos.length !=0 && side_videos.map((el:any,index:number)=>{
          return <SideCard key = {index} card_data={el}/>
        })}
      </Box>
    </Box>
  );
}

export default PlayVideo;
