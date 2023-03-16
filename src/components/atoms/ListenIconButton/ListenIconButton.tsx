import icons from "styles/icons";

import { useEffect, useRef, useState } from "react";

import { Icon, IconButton } from "@mui/material";

export interface IListenIconButton {
  playOnMount?: boolean;
  audioLink: string;
  onFinish?: () => void;
}

const ListenIconButton: React.FC<IListenIconButton> = ({
  playOnMount = false,
  audioLink,
  onFinish,
}) => {
  const [state, setState] = useState<"STOPPED" | "RUNNING" | "PAUSED">(
    playOnMount ? "RUNNING" : "STOPPED"
  );
  const [finished, setFinished] = useState(false);
  const audioRef = useRef(new Audio(audioLink));

  function resetSound() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setState("STOPPED");
  }

  useEffect(() => {
    if (finished) onFinish?.();
  }, [finished, onFinish]);

  useEffect(() => {
    state === "RUNNING" ? audioRef.current.play() : audioRef.current.pause();
  }, [state]);

  useEffect(() => {
    const ref = audioRef.current;
    return () => ref.pause();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current.currentTime >= audioRef.current.duration) {
        setFinished(true);
        setState("STOPPED");
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    if (audioRef.current.paused) {
      if (audioRef.current.currentTime === audioRef.current.duration)
        resetSound();

      setState("RUNNING");
    } else setState("PAUSED");
  };

  return (
    <IconButton onClick={handleButtonClick}>
      <Icon color={state === "RUNNING" ? "primary" : undefined}>
        {icons.sound}
      </Icon>
    </IconButton>
  );
};

export default ListenIconButton;
