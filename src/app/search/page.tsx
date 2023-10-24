// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { useState } from "react";

import { Box } from "@mui/material";

import LessonItemsSearchResults from "components/atoms/LessonItemsSearchResults/LessonItemsSearchResults";
import LessonsSearchResults from "components/atoms/LessonsSearchResults/LessonsSearchResults";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";
import UserSearchResults from "components/atoms/UserSearchResults/UserSearchResults";

import { categories } from "./config";

export interface ISearchPagePage {}

const SearchPagePage: React.FC<ISearchPagePage> = () => {
  const { t } = useTranslation("cs", "common");
  const [text, setText] = useState("");
  const [searchPrompt, setSearchPrompt] = useState("");
  const [value, setValue] = useState(categories[0].id);
  const { user } = useAuth();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <SearchBar
        title={t("search.title")}
        value={text}
        onChange={(text) => setText(text)}
        onSearchClick={(text) => setSearchPrompt(text)}
      />

      {searchPrompt && (
        <TabBarPanel
          onChange={(value) => setValue(value)}
          tabs={categories}
          panelContent={
            value === categories[0].id ? (
              <UserSearchResults searchPrompt={searchPrompt} />
            ) : value === categories[1].id ? (
              <>
                {user && (
                  <LessonsSearchResults
                    courseId={user.selectedCourse.id}
                    searchPrompt={searchPrompt}
                  />
                )}
              </>
            ) : (
              <LessonItemsSearchResults searchPrompt={searchPrompt} />
            )
          }
          value={value}
        />
      )}
    </Box>
  );
};

export default SearchPagePage;
