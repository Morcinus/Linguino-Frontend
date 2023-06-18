import { useTranslation } from "i18n/client";

import { useState } from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { GOAL_OPTIONS } from "./config";

export interface IDailyGoalSettings {
  dailyGoal: number;
  onGoalChange: (value: number) => void;
}

const DailyGoalSettings: React.FC<IDailyGoalSettings> = ({
  dailyGoal,
  onGoalChange,
}) => {
  const { t } = useTranslation("cs", "form");
  const [value, setValue] = useState(dailyGoal?.toString());

  function handleChange(event: SelectChangeEvent) {
    setValue(event.target.value as string);
    onGoalChange(Number(event.target.value));
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} width="100%">
      <Typography variant="subtitle1">{t("settings.dailyGoal")}</Typography>
      <FormControl fullWidth>
        <InputLabel id="daily-goal-label">{t("settings.dailyGoal")}</InputLabel>
        <Select
          labelId="daily-goal-label"
          id="daily-goal-select"
          value={value}
          label={t("settings.dailyGoal")}
          onChange={handleChange}
        >
          {GOAL_OPTIONS.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {`${t(`settings.goalOptions.${option.label}`)}: ${
                option.value
              } ${t("settings.exercisesPerDay")}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DailyGoalSettings;
