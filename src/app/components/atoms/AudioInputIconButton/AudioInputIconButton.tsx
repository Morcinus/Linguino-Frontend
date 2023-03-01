import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import MicIcon from "@mui/icons-material/Mic";
import { Box, IconButton } from "@mui/material";

import { Language } from "../../../../domain/models/types/languages";
import styles from "./AudioInputIconButton.module.css";

export interface IAudioInputIconButton {
  onChange: (text: string) => void;
  inputLanguage: Language;
  disabled?: boolean;
}

const AudioInputIconButton: React.FC<IAudioInputIconButton> = ({
  onChange,
  inputLanguage,
  disabled = false,
}) => {
  const [enabled, setEnabled] = useState(true);

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    setEnabled(false);
  }

  useEffect(() => {
    onChange(transcript);
  }, [transcript, onChange]);

  return (
    <>
      {enabled ? (
        <>
          {listening ? (
            <IconButton
              onClick={SpeechRecognition.stopListening}
              disabled={disabled}
            >
              <Box className={styles.dots}>
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
              </Box>
            </IconButton>
          ) : (
            <IconButton
              onClick={() =>
                SpeechRecognition.startListening({
                  language: inputLanguage,
                })
              }
              disabled={disabled}
            >
              <MicIcon />
            </IconButton>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AudioInputIconButton;
