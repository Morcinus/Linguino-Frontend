import { useEffect, useState } from "react";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box, IconButton, Typography } from "@mui/material";

import { timeMMSS } from "../../../../util/functions/filters";
import theme from "../../../styles/theme";
import SimpleCircularProgress from "../SimpleCircularProgress/SimpleCircularProgress";

export interface ITimer {
  milliseconds: number;
  onFinish?: () => void;
}

const Timer: React.FC<ITimer> = ({ milliseconds, onFinish }) => {
  const [value, setValue] = useState<number>(0);
  const [running, setRunning] = useState(true);
  const [finished, setFinished] = useState(false);

  function initTimer() {
    setValue(0);
    setFinished(false);
    setRunning(true);
  }

  useEffect(() => {
    let interval: any = null;
    let tickMs = 50;

    if (value >= milliseconds) {
      clearInterval(interval);
      setFinished(true);
      setRunning(false);
      if (typeof onFinish === "function") onFinish();
    }

    if (running) {
      interval = setInterval(() => {
        setValue((value) => value + tickMs);
      }, tickMs);
    }

    return () => clearInterval(interval);
  }, [running, value]);

  const handleClick = () => {
    if (finished) {
      initTimer();
      return;
    }

    if (running) {
      setRunning(false);
    } else setRunning(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <SimpleCircularProgress
        progress={(value / milliseconds) * 100}
        color={theme.palette.primary.main}
        thickness="thin"
      >
        <Typography variant="h4">{timeMMSS(milliseconds - value)}</Typography>
      </SimpleCircularProgress>
      <IconButton onClick={handleClick} sx={{ mt: 1 }}>
        {finished ? (
          <ReplayIcon />
        ) : running ? (
          <PauseIcon />
        ) : (
          <PlayArrowIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default Timer;
