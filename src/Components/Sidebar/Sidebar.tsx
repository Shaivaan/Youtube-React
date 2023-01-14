import { Box , Tooltip } from "@mui/material";
import { AiFillHome, AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import styles from "./Sidebar.module.css";
import { drwaer_opener_text, icon_default_size } from "../../assets/sizes";

function Sidebar() {
  return (
    <Box className={styles.drawer_opener}>
      <Tooltip title={"Home"} placement={"bottom-start"}>
        <Box className={styles.drawer_opener_options}>
          <AiFillHome fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Home</Box>
        </Box>
      </Tooltip>

      <Tooltip title={"Shorts"} placement={"bottom-start"}>
        <Box className={styles.drawer_opener_options}>
          <AiOutlinePlayCircle fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Shorts</Box>
        </Box>
      </Tooltip>

      <Tooltip title={"Subscription"} placement={"bottom-start"}>
        <Box className={styles.drawer_opener_options}>
          <MdOutlineSubscriptions fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Subscription</Box>
        </Box>
      </Tooltip>

      <Tooltip title={"Library"} placement={"bottom-start"}>
        <Box className={styles.drawer_opener_options}>
          <MdOutlineVideoLibrary fontSize={icon_default_size} />
          <Box fontSize={drwaer_opener_text}>Library</Box>
        </Box>
      </Tooltip>
    </Box>
  );
}

export default Sidebar;
