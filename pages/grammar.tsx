import React, { useState } from "react";

import { TabContext, TabPanel } from "@mui/lab";
import { Divider, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";

import GrammarAPI from "../api/GrammarAPI";
import CardGrid from "../components/CardGrid";
import { GrammarLesson } from "../types/grammar";

export default function grammar() {
  const [value, setValue] = useState("0");
  const { grammarLessonCategories, isLoading } = GrammarAPI.useGrammarLessons();

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
              {grammarLessonCategories?.map((group: any, i: number) => {
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

            {grammarLessonCategories?.map((group: any, i: number) => {
              return (
                <TabPanel value={`${i}`} sx={{ pt: 1 }} key={`${i}`}>
                  <Divider sx={{ mb: 3 }}>
                    <Typography variant="h5">{group.category.name}</Typography>
                  </Divider>
                  <CardGrid
                    cards={group.data.map(
                      ({ lessonId, lessonName, progress }: GrammarLesson) => ({
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