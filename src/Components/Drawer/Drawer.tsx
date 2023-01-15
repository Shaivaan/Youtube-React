import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoReorderThreeOutline } from "react-icons/io5";
import { icon_default_size,sidebar_icon_size } from "../../assets/sizes";
import { IconButton } from "@mui/material";
import styles from "./Drawer.module.css";
import { AiFillHome, AiOutlinePlayCircle } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { RiHistoryFill, RiVideoLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { youtube_logo } from "../../assets/assets";

type Anchor = "top" | "left" | "bottom" | "right";


export default function RightDrawer() {
  const anchor = "left";
  const [iseDrawerVisible, setisDrawarVisible] = React.useState(false);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setisDrawarVisible(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.drawer_main}
    >
      <List>

            <ListItemButton sx={{
        ':hover': {
          backgroundColor: 'white',
        },
      }} className={styles.drawer_first_option} disableRipple={true}>
              <ListItemIcon >
                <Box fontSize={sidebar_icon_size}><IoReorderThreeOutline/></Box>
              </ListItemIcon>
              <ListItemText primary={<img className={styles.youtube_logo_style} src={youtube_logo}/>} />
            </ListItemButton>

        {[
          { title: "Home", icon: <AiFillHome /> },
          { title: "Shorts", icon: <AiOutlinePlayCircle /> },
          { title: "Subscription", icon: <MdOutlineSubscriptions /> },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Box fontSize={sidebar_icon_size}>{item.icon}</Box>
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { title: "Library", icon: <MdOutlineVideoLibrary /> },
          { title: "History", icon: <RiHistoryFill /> },
          { title: "Your videos", icon: <RiVideoLine /> },
          { title: "Watch Later", icon: <MdOutlineWatchLater /> },
          { title: "Liked videos", icon: <BiLike /> },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Box fontSize={sidebar_icon_size}>{item.icon}</Box>
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton onClick={toggleDrawer(anchor, true)}>
          <IoReorderThreeOutline
            className={styles.drawer_option}
            fontSize={icon_default_size}
          />
        </IconButton>
        <Drawer
          anchor={anchor}
          open={iseDrawerVisible}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}


