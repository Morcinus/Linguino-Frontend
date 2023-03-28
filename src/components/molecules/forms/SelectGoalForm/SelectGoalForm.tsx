import { useTranslation } from "i18n/client";
import icons from "styles/icons";

import { useState } from "react";

import { Box, Icon, Typography } from "@mui/material";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import MultipleChoiceCardList from "components/atoms/lists/MultipleChoiceCardList/MultipleChoiceCardList";

import { GoalOption, goalOptions } from "./config";

export interface ISelectGoalForm {
  onSubmit: (goal: GoalOption) => void;
}

const SelectGoalForm: React.FC<ISelectGoalForm> = ({ onSubmit }) => {
  const { t: tForm } = useTranslation("cs", "form");
  const { t: tCommon } = useTranslation("cs", "common");
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="subtitle1" mb={1}>
        {tForm("accountSetup.goalSelectTitle")}
      </Typography>

      <MultipleChoiceCardList
        choices={goalOptions.map((goal) => {
          return {
            name: tForm(`accountSetup.goalSelectOptions.${goal.id}.name`),
            description: tForm(
              `accountSetup.goalSelectOptions.${goal.id}.description`
            ),
          };
        })}
        onChange={(i) => setSelectedIndex(i)}
        selectedIndex={selectedIndex}
      />

      <FullWidthButton
        onClick={() => {
          if (selectedIndex !== undefined) onSubmit(goalOptions[selectedIndex]);
        }}
        disabled={selectedIndex === undefined}
      >
        {tCommon("navigation.continue")}
        <Icon>{icons.next}</Icon>
      </FullWidthButton>
    </Box>
  );
};

export default SelectGoalForm;
