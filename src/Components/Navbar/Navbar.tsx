import { Box, TextField, Avatar, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { BsMicFill } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { icon_default_size } from "../../assets/sizes";
import { youtube_logo } from "../../assets/assets";
import RightDrawer from "../Drawer/Drawer";
import { useNavigate } from "react-router-dom";
const navbar_background_color = "white";

function Navbar() {
  const navigate = useNavigate();
  const [search_text, set_search_text] = useState("");
  const handleChange = (e: any) => {
    set_search_text(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    search_text.trim().length != 0 &&
      navigate(`/search?search_query=${search_text}`);
  };
  const homeRedirector = () => {
    navigate("/");
  };

  return (
    <Box className={styles.navbar_parent} bgcolor={navbar_background_color}>
      <Box className={styles.nav_main}>
        <Box className={styles.youtube_logo_container}>
          <Box className={styles.opener_icon_container}>
            <RightDrawer />
          </Box>
          <Box onClick={homeRedirector}>
            <img className={styles.youtube_logo_style} src={youtube_logo} />
          </Box>
        </Box>
        <Box className={styles.search_container}>
          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              value={search_text}
              onChange={handleChange}
              className={styles.search_bar}
              autoComplete={"off"}
              InputProps={{
                endAdornment: (
                  <Box
                    className={styles.search_icon_container}
                    component={"span"}
                  >
                    <IconButton type={"submit"}>
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
                <RiVideoAddLine fontSize={icon_default_size} />
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

export default Navbar;
