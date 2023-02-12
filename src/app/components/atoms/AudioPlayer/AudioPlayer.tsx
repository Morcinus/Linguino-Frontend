import { useEffect, useState } from "react";

import Forward10Icon from "@mui/icons-material/Forward10";
import PauseIcon from "@mui/icons-material/Pause";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Replay10Icon from "@mui/icons-material/Replay10";
import { Box, IconButton, LinearProgress } from "@mui/material";

import ImageCard from "../ImageCard/ImageCard";

export interface IAudioPlayer {
  playOnMount: boolean;
  audioLink: string;
  imageURL: string;
  onFinish?: () => void;
}

const AudioPlayer: React.FC<IAudioPlayer> = ({
  playOnMount,
  audioLink,
  imageURL,
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
      if (audio.currentTime >= audio.duration) resetSound();

      playSound();
    } else pauseSound();
  };

  const handleReplay = () => {
    if (state === "STOPPED") {
      setState("RUNNING");
      audio.play();
    }

    audio.currentTime = audio.currentTime - 10;
  };

  const handleForward = () => {
    audio.currentTime = audio.currentTime + 10;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ImageCard url={imageURL} />

      <LinearProgress value={value} variant="determinate" color="primary" />

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <IconButton onClick={handleReplay} size="medium">
            <Replay10Icon color="primary" />
          </IconButton>
        </Box>
        <IconButton onClick={handleButtonClick} size="large">
          {state === "STOPPED" || state === "PAUSED" ? (
            <PlayCircleOutlineIcon color="primary" fontSize="large" />
          ) : (
            <PauseIcon color="primary" fontSize="large" />
          )}
        </IconButton>
        <Box>
          <IconButton onClick={handleForward} size="medium">
            <Forward10Icon color="primary" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
