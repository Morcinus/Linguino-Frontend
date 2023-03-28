import { useTranslation } from "i18n/client";
import { SurveyAnswer } from "infrastructure/api/survey-answers/SurveyAnswers";
import icons from "styles/icons";

import { useState } from "react";

import { Box, Icon, Typography } from "@mui/material";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import MultipleChoiceCardList from "components/atoms/lists/MultipleChoiceCardList/MultipleChoiceCardList";

import { surveyOptions } from "./config";

export interface IInitialSurveyForm {
  onSubmit: (answer: Omit<SurveyAnswer, "id">) => void;
}

const InitialSurveyForm: React.FC<IInitialSurveyForm> = ({ onSubmit }) => {
  const { t: tForm } = useTranslation("cs", "form");
  const { t: tCommon } = useTranslation("cs", "common");
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="subtitle1" mb={1}>
        {tForm("accountSetup.initialSurveyQuestion")}
      </Typography>

      <MultipleChoiceCardList
        choices={surveyOptions.map((option) => {
          return {
            name: tForm(`accountSetup.initialSurveyOptions.${option.id}`),
          };
        })}
        onChange={(i) => setSelectedIndex(i)}
        selectedIndex={selectedIndex}
      />

      <FullWidthButton
        onClick={() => {
          if (selectedIndex !== undefined)
            onSubmit({ answer: surveyOptions[selectedIndex].id });
        }}
        disabled={selectedIndex === undefined}
      >
        {tCommon("navigation.continue")}
        <Icon>{icons.next}</Icon>
      </FullWidthButton>
    </Box>
  );
};

export default InitialSurveyForm;
