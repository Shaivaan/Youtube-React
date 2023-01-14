import React from "react";
import {
  Box,
  TextField,
  Avatar,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Drawer,
} from "@mui/material";
import styles from "./Navbar.module.css";
import { BsMicFill } from "react-icons/bs";
import { SlCamrecorder } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { icon_default_size } from "../../assets/sizes";
import { youtube_logo } from "../../assets/assets";
import { IoReorderThreeOutline } from "react-icons/io5";


function Navbar() {
  return (
    <Box className={styles.navbar_parent}>


    

      <Box className={styles.nav_main}>
        <Box className={styles.youtube_logo_container}> 
          <Box className={styles.opener_icon_container}>
          <IoReorderThreeOutline fontSize={icon_default_size} />
          </Box>
          <Box>
          <img className={styles.youtube_logo_style} src={youtube_logo} />
          </Box>
        </Box>
        <Box className={styles.search_container}>
          <Box>
            <TextField
              className={styles.search_bar}
              autoComplete={"off"}
              InputProps={{
                endAdornment: (
                  <Box
                    className={styles.search_icon_container}
                    component={"span"}
                  >
                    <IconButton>
                      <CiSearch fontSize={icon_default_size} />
                    </IconButton>
                  </Box>
                ),
              }}
              size={"small"}
              placeholder="Search"
            />
          </Box>
          <Box>
            <ToolTipCustom title={"Search with your voice"}>
              <IconButton>
                <BsMicFill fontSize={icon_default_size} />
              </IconButton>
            </ToolTipCustom>
          </Box>
        </Box>
        <Box className={styles.profile_container}>
          <Box>
            <ToolTipCustom title={"Create"}>
              <IconButton>
                <SlCamrecorder fontSize={icon_default_size} />
              </IconButton>
            </ToolTipCustom>
          </Box>
          <Box className={styles.notification_icon}>
            <ToolTipCustom title={"Notification"}>
              <IconButton>
                <IoMdNotificationsOutline fontSize={icon_default_size} />
              </IconButton>
            </ToolTipCustom>
          </Box>
          <Box>
            <IconButton>
              <Avatar
                style={{ width: icon_default_size, height: icon_default_size }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const ToolTipCustom = ({ children, title }: any) => {
  return (
    <Tooltip placement="bottom" title={title}>
      {children}
    </Tooltip>
  );
};

function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type Anchor = "top" | "left" | "bottom" | "right";

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

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <IoMdNotificationsOutline />
                ) : (
                  <IoMdNotificationsOutline />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <IoMdNotificationsOutline />
                ) : (
                  <IoMdNotificationsOutline />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Navbar;
