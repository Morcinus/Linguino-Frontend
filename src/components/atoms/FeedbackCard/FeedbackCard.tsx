import { Feedback } from "domain/models/types/lessons";
import { useTranslation } from "i18n/client";
import { useSnackbar } from "notistack";
import icons from "styles/icons";

import { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export interface IFeedbackCard {
  onFeedbackChange: (value: Feedback) => void;
  feedback: Feedback;
}

const FeedbackCard: React.FC<IFeedbackCard> = ({
  onFeedbackChange,
  feedback,
}) => {
  const { t } = useTranslation("cs", "common");
  const [value, setValue] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Card>
      <CardContent
        sx={{
          "&:last-child": {
            paddingBottom: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            onClick={() => onFeedbackChange({ ...feedback, state: "LIKED" })}
          >
            <Icon
              baseClassName={
                feedback.state !== "LIKED"
                  ? "material-icons-outlined"
                  : undefined
              }
            >
              {icons.like}
            </Icon>
          </IconButton>
          <IconButton
            onClick={() => onFeedbackChange({ ...feedback, state: "DISLIKED" })}
          >
            <Icon
              baseClassName={
                feedback.state !== "DISLIKED"
                  ? "material-icons-outlined"
                  : undefined
              }
            >
              {icons.dislike}
            </Icon>
          </IconButton>
        </Box>
        {feedback.state === "DISLIKED" && !feedback.textFeedback && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 1,
            }}
          >
            <Typography variant="body1">{t("feedback.header")}</Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="text"
                onClick={() => {
                  onFeedbackChange({ ...feedback, textFeedback: value });
                  enqueueSnackbar(t("feedback.thanks"));
                }}
              >
                {t("other.submit")}
              </Button>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
