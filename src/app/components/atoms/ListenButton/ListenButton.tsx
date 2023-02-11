import { useEffect, useState } from "react";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, CircularProgress, Fab } from "@mui/material";

export interface IListenButton {
  playOnMount: boolean;
  displayProgress: boolean;
  audioLink: string;
  onFinish?: () => void;
}

const ListenButton: React.FC<IListenButton> = ({
  playOnMount,
  displayProgress,
  audioLink,
  onFinish,
}) => {
  const [value, setValue] = useState(0);
  const [state, setState] = useState<"STOPPED" | "RUNNING" | "PAUSED">(
    "STOPPED"
  );
  const [audio, setAudio] = useState(new Audio(audioLink));

  function playSound() {
    setState("RUNNING");
    audio.play();
  }

  function pauseSound() {
    setState("PAUSED");
    audio.pause();
  }

  function resetSound() {
    audio.pause();
    audio.currentTime = 0;
    setState("STOPPED");
    setValue(0);
  }

  useEffect(() => {
    pauseSound();
    audio.currentTime = 0;

    if (playOnMount) {
      playSound();
    }

    audio.addEventListener("ended", () => {
      setState("STOPPED");
      if (typeof onFinish === "function") onFinish();
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(() => (audio.currentTime / audio.duration) * 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    if (audio.paused) {
      if (audio.currentTime === audio.duration) resetSound();

      playSound();
    } else pauseSound();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab
          sx={{
            boxShadow: "0 3px 8px 0 rgba(0,0,0,0.08)",
            backgroundColor: "rgba(0,0,0,0)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
            width: "80px",
            height: "80px",
          }}
          onClick={handleButtonClick}
        >
          {state === "STOPPED" || state === "PAUSED" ? (
            <PlayArrowIcon color="primary" fontSize="large" />
          ) : (
            <PauseIcon color="primary" fontSize="large" />
          )}
        </Fab>
        {displayProgress && (
          <CircularProgress
            size={88}
            value={value}
            variant="determinate"
            color="primary"
            thickness={2}
            sx={{
              position: "absolute",
              top: "-4px",
              left: "-4px",
              zIndex: 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ListenButton;
