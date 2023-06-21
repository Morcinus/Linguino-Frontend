import theme from "styles/theme";

import { ReactNode } from "react";

import {
  Box,
  Container,
  Dialog,
  DialogProps,
  Icon,
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
    icon?: string;
  };
  secondaryButton?: {
    onClick?: () => void;
    text?: string;
    icon?: string;
  };
}

const FullscreenDialog: React.FC<
  IFullscreenDialog & Omit<DialogProps, "open" | "fullScreen">
> = ({
  primaryButton,
  secondaryButton,
  imageURL,
  header1,
  header2,
  text,
  children,
  ...rest
}) => {
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Dialog fullScreen open={true} {...rest}>
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
              endIcon={
                secondaryButton.icon ? (
                  <Icon>{secondaryButton.icon}</Icon>
                ) : undefined
              }
            >
              {secondaryButton.text}
            </FullWidthButton>
          )}
          {primaryButton && (
            <FullWidthButton
              onClick={() => primaryButton.onClick?.()}
              endIcon={
                primaryButton.icon ? (
                  <Icon>{primaryButton.icon}</Icon>
                ) : undefined
              }
            >
              {primaryButton.text}
            </FullWidthButton>
          )}
        </Box>
      </Container>
    </Dialog>
  );
};

export default FullscreenDialog;
