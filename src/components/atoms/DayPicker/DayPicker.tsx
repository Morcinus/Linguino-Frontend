import { useTranslation } from "i18n/client";
import { Day } from "infrastructure/api/settings/Settings";

import { useState } from "react";

import { Box, Button } from "@mui/material";

import { DAYS } from "./config";

export interface IDayPicker {
  days: Array<Day>;
  onDaysChange: (days: Array<Day>) => void;
}

const DayPicker: React.FC<IDayPicker> = ({
  days: initialDays,
  onDaysChange,
}) => {
  const [days, setDays] = useState(initialDays);
  const { t } = useTranslation("cs", "form");

  const handleChange = (day: Day) => {
    let newDays = [...days];
    if (newDays.includes(day)) {
      newDays = newDays.filter((e) => e !== day);
    } else {
      newDays = [...newDays, day];
    }

    setDays(newDays);
    onDaysChange(newDays);
  };

  return (
    <Box display="flex" flexDirection="row" gap={1}>
      {DAYS.map((day) => (
        <Button
          key={day}
          sx={{
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            minWidth: "32px",
            padding: "6px",
          }}
          variant={days.some((d) => d === day) ? "contained" : "outlined"}
          onClick={() => handleChange(day)}
        >
          {t(`dayLabels.${day}`)}
        </Button>
      ))}
    </Box>
  );
};

export default DayPicker;
