import { ReactNode } from "react";

import { Box, Button, Typography } from "@mui/material";

import FullWidthButton from "../FullWidthButton/FullWidthButton";
import ImageCard from "../ImageCard/ImageCard";
import KeyPress from "../KeyPress/KeyPress";

export interface IFullscreenDialog {
  header1?: string;
  imageURL?: string;
  header2?: string;
  body?: string;
  children?: ReactNode;
  primaryButton?: {
    onClick?: () => void;
    text?: string;
  };
  secondaryButton?: {
    onClick?: () => void;
    text?: string;
  };
}

const FullscreenDialog: React.FC<IFullscreenDialog> = ({
  primaryButton,
  secondaryButton,
  imageURL,
  header1,
  header2,
  body,
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "auto",
        gap: 1,
        mb: 4,
      }}
    >
      <KeyPress onPress={() => primaryButton?.onClick?.()} keys={["Enter"]} />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {header1}
      </Typography>

      {imageURL && <ImageCard url={imageURL} />}

      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {header2}
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {body}
      </Typography>

      {children}

      {secondaryButton && (
        <Button
          onClick={() => secondaryButton.onClick?.()}
          sx={{
            position: "fixed",
            bottom: 42,
            left: 0,
            width: "100%",
            borderRadius: 0,
          }}
          size="large"
        >
          {secondaryButton.text}
        </Button>
      )}
      {primaryButton && (
        <FullWidthButton onClick={() => primaryButton.onClick?.()}>
          {primaryButton.text}
        </FullWidthButton>
      )}
    </Box>
  );
};

export default FullscreenDialog;
