import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import MicIcon from "@mui/icons-material/Mic";
import { Box, Fab } from "@mui/material";

import { Language } from "../../../../domain/models/types/languages";
import styles from "./AudioInputButton.module.css";

interface Command {
  command: string | string[] | RegExp;
  callback: (...args: any[]) => unknown;
  isFuzzyMatch?: boolean | undefined;
  matchInterim?: boolean | undefined;
  fuzzyMatchingThreshold?: number | undefined;
  bestMatchOnly?: boolean | undefined;
}

export interface IAudioInputButton {
  onChange?: (text: string) => void;
  inputLanguage: Language;
  disabled?: boolean;
  commands?: Array<Command>;
}

const AudioInputButton: React.FC<IAudioInputButton> = ({
  onChange,
  inputLanguage,
  disabled = false,
  commands = [],
}) => {
  const [enabled, setEnabled] = useState(true);

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    setEnabled(false);
  }

  useEffect(() => {
    onChange?.(transcript);
  }, [transcript]);

  return (
    <>
      {enabled ? (
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
              disabled={disabled}
              onClick={() => {
                if (listening) {
                  SpeechRecognition.stopListening();
                } else {
                  SpeechRecognition.startListening({
                    language: inputLanguage,
                  });
                }
              }}
            >
              {listening ? (
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
              ) : (
                <MicIcon color="primary" fontSize="large" />
              )}
            </Fab>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default AudioInputButton;
