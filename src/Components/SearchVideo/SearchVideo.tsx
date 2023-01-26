import { Avatar, Box } from "@mui/material";
import style from "./SearchVideo.module.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function SearchVideo({ card_data, channel_data }: any) {
  const navigate = useNavigate();
  const { title, channelTitle, publishedAt } = card_data.snippet;
  const thumbnail = card_data.snippet.thumbnails.high.url;
  const { videoId } = card_data.id;
  const handleRedirect = () => {
    navigate(`/watch?v=${videoId}`);
  };
  const avatar = channel_data?.snippet?.thumbnails?.high?.url;

  return (
    <Box onClick={handleRedirect} className={style.search_card_parent}>
      <Box>
        <img className={style.search_image_thumbnail} src={thumbnail} />
      </Box>
      <Box className={style.search_content_container}>
        <Box className={style.title_search}>{title}</Box>
        <Box className={`${style.views_and_published} ${style.greyText}`}>
          <Box>
            {moment(publishedAt).fromNow() == "a day ago"
              ? "1 day ago"
              : moment(publishedAt).fromNow()}
          </Box>
        </Box>

        <Box className={`${style.channel_about} ${style.greyText}`}>
          <Avatar
            style={{ width: "25px", height: "25px" }}
            className={style.avatar_style}
            src={avatar}
          />
          <Box>{channelTitle}</Box>
        </Box>
        <Box className={`${style.description} ${style.greyText}`}>
          {card_data?.snippet?.description}
        </Box>
      </Box>
    </Box>
  );
}

export default SearchVideo;
