import { useTranslation } from "i18n/client";
import icons from "styles/icons";

import { useState } from "react";

import { Box, Icon, Typography } from "@mui/material";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import MultipleChoiceCardList from "components/atoms/lists/MultipleChoiceCardList/MultipleChoiceCardList";

import { LevelOption, levelOptions } from "./config";

export interface ISelectLevelForm {
  onSubmit: (answer: LevelOption) => void;
}

const SelectLevelForm: React.FC<ISelectLevelForm> = ({ onSubmit }) => {
  const { t: tForm } = useTranslation("cs", "form");
  const { t: tCommon } = useTranslation("cs", "common");
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="subtitle1" mb={1}>
        {tForm("accountSetup.levelOptionsTitle")}
      </Typography>

      <MultipleChoiceCardList
        choices={levelOptions.map((option, i) => {
          return {
            name: tForm(`accountSetup.levelOptions.${option.id}.name`),
            description:
              selectedIndex === i
                ? tForm(`accountSetup.levelOptions.${option.id}.description`)
                : undefined,
          };
        })}
        onChange={(i) => setSelectedIndex(i)}
        selectedIndex={selectedIndex}
      />

      <FullWidthButton
        onClick={() => {
          if (selectedIndex !== undefined)
            onSubmit(levelOptions[selectedIndex]);
        }}
        disabled={selectedIndex === undefined}
      >
        {tCommon("navigation.continue")}
        <Icon>{icons.next}</Icon>
      </FullWidthButton>
    </Box>
  );
};

export default SelectLevelForm;
