import React from "react";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export interface IStudySessionProgressBar {
  value: number;
  maxValue: number;
}

const StudySessionProgressBar: React.FC<IStudySessionProgressBar> = ({
  value,
  maxValue,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        color="primary"
        variant="determinate"
        value={value <= maxValue ? (value / maxValue) * 100 : 100}
        sx={{
          height: 9,
          borderRadius: 5,
        }}
      />
    </Box>
  );
};

export default StudySessionProgressBar;
