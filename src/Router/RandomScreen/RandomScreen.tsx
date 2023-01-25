import React, { useEffect } from "react";
import { Box } from "@mui/material";
import styles from "./RandomeScreen.module.css";
import { useNavigate } from "react-router-dom";

const gif = "https://media.tenor.com/XRaqIsw6SgcAAAAd/rahul-gandhi-khatam.gif";
const wait_time = 4000;
function RandomScreen() {
  const navigate = useNavigate();
  const redirect_back = () => {
    setTimeout(() => {
      navigate("/");
    }, wait_time);
  };

  useEffect(() => {
    redirect_back();
  }, []);

  return (
    <Box className={styles.random_parent}>
      <img src={gif} />
    </Box>
  );
}

export default RandomScreen;
