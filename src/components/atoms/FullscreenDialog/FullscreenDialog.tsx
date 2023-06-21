import theme from "styles/theme";

import { ReactNode } from "react";

import {
  Box,
  Container,
  Dialog,
  Typography,
  useMediaQuery,
} from "@mui/material";

import FullWidthButton from "../FullWidthButton/FullWidthButton";
import KeyPress from "../KeyPress/KeyPress";
import ImageCard from "../cards/ImageCard/ImageCard";

export interface IFullscreenDialog {
  header1?: string;
  imageURL?: string;
  header2?: string;
  text?: string;
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
  text,
  children,
}) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Dialog fullScreen open={true}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          pt: desktop ? 12 : 4,
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
          {text}
        </Typography>

        {children}

        <Box display="flex" flexDirection="column" sx={{ mt: 8 }}>
          {secondaryButton && (
            <FullWidthButton
              variant="text"
              bottomOffset
              onClick={() => secondaryButton.onClick?.()}
            >
              {secondaryButton.text}
            </FullWidthButton>
          )}
          {primaryButton && (
            <FullWidthButton onClick={() => primaryButton.onClick?.()}>
              {primaryButton.text}
            </FullWidthButton>
          )}
        </Box>
      </Container>
    </Dialog>
  );
};

export default FullscreenDialog;
