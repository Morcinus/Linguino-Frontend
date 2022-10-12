import { useEffect, useState } from "react";

import HeadphonesIcon from "@mui/icons-material/Headphones";
import { Box, CircularProgress, Fab } from "@mui/material";

import styles from "./ListenButton.module.css";

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
  const [running, setRunning] = useState(false);
  const [audio, setAudio] = useState(new Audio(audioLink));

  function playSound() {
    setRunning(true);
    audio.play();
  }

  function pauseSound() {
    setRunning(false);
    audio.pause();
  }

  function resetSound() {
    audio.pause();
    audio.currentTime = 0;
    setRunning(false);
    setValue(0);
  }

  useEffect(() => {
    pauseSound();
    audio.currentTime = 0;

    if (playOnMount) {
      playSound();
    }

    audio.addEventListener("ended", () => {
      setRunning(false);
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
            boxShadow: "none",
            backgroundColor: "rgba(0,0,0,0)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
          }}
          onClick={handleButtonClick}
        >
          {running ? (
            <div className={styles.dots}>
              <Box
                sx={{ backgroundColor: "primary.main" }}
                className={[styles.dot, styles.dot1].join(" ")}
              />
              <Box
                sx={{ backgroundColor: "primary.main" }}
                className={[styles.dot, styles.dot2].join(" ")}
              />
              <Box
                sx={{ backgroundColor: "primary.main" }}
                className={[styles.dot, styles.dot3].join(" ")}
              />
            </div>
          ) : (
            <HeadphonesIcon color="primary" fontSize="large" />
          )}
        </Fab>
        {displayProgress && (
          <CircularProgress
            size={68}
            value={value}
            variant="determinate"
            color="primary"
            sx={{
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
              borderRadius: 5,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ListenButton;
