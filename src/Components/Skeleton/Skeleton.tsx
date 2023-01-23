import style from "./Skeleton.module.css";
import { Box, Skeleton } from "@mui/material";

function LoadingSkeleton() {
  return (
    <Box>
      <Skeleton variant="rectangular" width={"100%"} height={200} />
      <Box className={style.snack_parent}>
          <Skeleton variant="circular" width={40} height={40} />
        <Box className={style.snack_lines}>
            <Skeleton variant="rectangular" />
            <Skeleton variant="rectangular" />
        </Box>
      </Box>
    </Box>
  );
}

export default LoadingSkeleton;
