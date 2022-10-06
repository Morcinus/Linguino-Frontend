import React from "react";

import { Box, LinearProgress } from "@mui/material";

export interface IMultiProgressBar {
  data: Array<{ goal: number; progress: number }>;
}

const MultiProgressBar: React.FC<IMultiProgressBar> = ({ data }) => {
  function calculateWidth(index: number): number {
    let max = 0;
    data.forEach((bar) => {
      max += bar.goal;
    });

    return (data[index].goal / max) * 100;
  }

  function calculateValue(index: number): number {
    return (data[index].progress / data[index].goal) * 100;
  }

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      {data.map((_, i) => {
        return (
          <Box sx={{ width: `${calculateWidth(i)}%`, p: 1 }} key={i}>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={calculateValue(i)}
              sx={{
                height: 9,
                borderRadius: 5,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default MultiProgressBar;
