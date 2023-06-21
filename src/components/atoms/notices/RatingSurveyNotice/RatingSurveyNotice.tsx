import { useTranslation } from "i18n/client";
import SurveyAnswersAPI from "infrastructure/api/survey-answers/SurveyAnswersAPI";
import { RatingSurveyNotice as RatingSurveyNoticeType } from "infrastructure/api/users/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";

import { useState } from "react";

import { Box, Rating, Typography } from "@mui/material";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface IRatingSurveyNotice {
  userId: ID;
  notice: RatingSurveyNoticeType;
}

const RatingSurveyNotice: React.FC<IRatingSurveyNotice> = ({
  userId,
  notice,
}) => {
  const { t } = useTranslation("cs", "common");
  const [rating, setRating] = useState<number>(
    Math.floor(notice.maxPoints / 2)
  );
  const { deleteNotice } = useNotices();

  return (
    <FullscreenDialog
      header1={notice.question}
      primaryButton={{
        onClick: () => {
          SurveyAnswersAPI.createSurveyAnswer({
            answer: rating,
            userId: userId,
            surveyId: notice.surveyId,
          });
          deleteNotice(userId, notice.id);
        },
        text: t("userActions.continue"),
      }}
    >
      <Box alignSelf="center">
        <Rating
          size="large"
          value={rating}
          onChange={(_, newValue) => {
            if (newValue) setRating(newValue);
          }}
          max={notice.maxPoints}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ maxWidth: `${30 * notice.maxPoints}px` }}
        >
          <Typography>{notice.answerLabel1}</Typography>
          <Typography>{notice.answerLabel2}</Typography>
        </Box>
      </Box>
    </FullscreenDialog>
  );
};

export default RatingSurveyNotice;
