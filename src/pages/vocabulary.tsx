import React, { useState } from "react";

import { TabContext, TabPanel } from "@mui/lab";
import { Divider, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";

import VocabularyAPI from "../api/VocabularyAPI";
import CardGrid from "../app/components/CardGrid";
import { VocabularyLesson } from "../domain/models/types/vocabulary";

export default function Vocabulary() {
  const [value, setValue] = useState("0");
  const { data: vocabularyLessonCategories, isLoading } =
    VocabularyAPI.useVocabularyLessons();

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
              {vocabularyLessonCategories?.map((group: any, i: number) => {
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

            {vocabularyLessonCategories?.map((group: any, i: number) => {
              return (
                <TabPanel value={`${i}`} sx={{ pt: 1 }} key={`${i}`}>
                  <Divider sx={{ mb: 3 }}>
                    <Typography variant="h5">{group.category.name}</Typography>
                  </Divider>
                  <CardGrid
                    cards={group.data.map(
                      ({
                        lessonId,
                        lessonName,
                        progress,
                      }: VocabularyLesson) => ({
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
