import React, { useState } from "react";

import { TabContext, TabPanel } from "@mui/lab";
import { Divider, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";

import SpeakingAPI from "../api/SpeakingAPI";
import CardGrid from "../components/CardGrid";
import { SpeakingLesson } from "../types/speaking";

export default function speaking() {
  const [value, setValue] = useState("0");
  const { speakingLessonCategories, isLoading } =
    SpeakingAPI.useSpeakingLessons();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {isLoading || (
        <Box>
          <TabContext value={value}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              TabIndicatorProps={{ style: { background: "rgba(0,0,0,0)" } }}
            >
              {speakingLessonCategories?.map((group: any, i: number) => {
                return (
                  <Tab
                    label={`${group.category.name}`}
                    value={`${i}`}
                    key={`${i}`}
                    sx={{
                      "&.Mui-selected": {
                        color: "#155D18",
                        backgroundColor: "#CCF3C5",
                        borderRadius: 16,
                      },
                    }}
                  />
                );
              })}
            </Tabs>

            {speakingLessonCategories?.map((group: any, i: number) => {
              return (
                <TabPanel value={`${i}`} sx={{ pt: 1 }} key={`${i}`}>
                  <Divider sx={{ mb: 3 }}>
                    <Typography variant="h5">{group.category.name}</Typography>
                  </Divider>
                  <CardGrid
                    cards={group.data.map(
                      ({ lessonId, lessonName, progress }: SpeakingLesson) => ({
                        id: lessonId,
                        title: lessonName,
                        progress,
                      })
                    )}
                  />
                </TabPanel>
              );
            })}
          </TabContext>
        </Box>
      )}
    </>
  );
}
