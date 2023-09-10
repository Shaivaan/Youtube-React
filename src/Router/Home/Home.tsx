import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Box } from "@mui/material";
import Card from "../../Components/Card/Card";
import LoadingSkeleton from "../../Components/Skeleton/Skeleton";

const api_key = "AIzaSyBNqHrjGMvelDRpe7sa9Vm2nSFifXNFjj8" ;
const number_of_videos = 50;
const youtube_api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${api_key}&maxResults=${number_of_videos}`;
const channel_data_api = (channel_id: any) =>
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${api_key}`;

export const Home = () => {
  const [videos_data, set_video_data] = useState([]);
  const [avatar_data, set_avatar_data] = useState<any>([]);
  const get_trending_videos = () => {
    fetch(youtube_api)
      .then((res) => {
        res
          .json()
          .then((res) => {
            get_avatar_data(res.items);
            set_video_data(res.items);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const get_avatar_data = (video_data: any) => {
    video_data.length != 0 &&
      video_data?.map((el: any) => {
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
  const myArray = Array.from({ length: 50 }, () => 0);

  useEffect(() => {
    get_trending_videos();
  }, []);

  return (
    <>
      <Box className={styles.home_container}>
        {videos_data?.length != 0
          ? videos_data?.map((el: any,index:number) => {
              return (
                <Card
                 key={index}
                  card_data={el}
                  channel_data={
                    avatar_data.filter(
                      (item: any) => item.id == el.snippet.channelId
                    )[0]
                  }
                />
              );
            })
          : myArray?.map((el: number,index:number) => {
              return <LoadingSkeleton key={index}/>;
            })}
      </Box>
    </>
  );
};

export default Home;
