import { useTranslation } from "i18n/client";
import { languages } from "i18n/settings";
import CoursesAPI from "infrastructure/api/courses/CoursesAPI";
import icons from "styles/icons";

import { useState } from "react";

import {
  FormControl,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import SimpleCard from "components/atoms/cards/SimpleCard/SimpleCard";
import CardGrid from "components/layouts/CardGrid/CardGrid";

export interface ISelectCourseForm {
  onSubmit: (courseId: string) => void;
}

const SelectCourseForm: React.FC<ISelectCourseForm> = ({ onSubmit }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCourseId, setSelectedCourseId] = useState<
    string | undefined
  >();
  const { t: tLanguages } = useTranslation("cs", "languages");
  const { t: tForm } = useTranslation("cs", "form");
  const { t: tCommon } = useTranslation("cs", "common");
  const { courses } = CoursesAPI.useCourses({ languageL1: selectedLanguage });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box>
        <Typography variant="subtitle1" mb={1}>
          {tForm("accountSetup.selectCourse")}
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="course-select-label">
            {tForm("accountSetup.iSpeak")}
          </InputLabel>
          <Select
            labelId="course-select-label"
            id="course-select"
            value={selectedLanguage}
            label={tForm("accountSetup.iSpeak")}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              setSelectedCourseId(undefined);
            }}
          >
            {languages.sort().map((l) => (
              <MenuItem value={l} key={l}>
                {tLanguages(l)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography variant="subtitle1" mb={1}>
          {tForm("accountSetup.iWantToLearn")}
        </Typography>

        {courses && (
          <CardGrid
            align="left"
            cards={courses.map((course) => {
              return {
                component: SimpleCard,
                props: {
                  header: course.name,
                  imageURL: course.thumbnailURL,
                  highlightCard: selectedCourseId === course.id,
                  highlightVariant: "outlined",
                  onClick: () => setSelectedCourseId(course.id),
                },
              };
            })}
          />
        )}
      </Box>

      <FullWidthButton
        onClick={() => {
          if (selectedCourseId !== undefined) onSubmit(selectedCourseId);
        }}
        disabled={selectedCourseId === undefined}
      >
        {tCommon("accountSetup.selectCourse")}
        <Icon>{icons.next}</Icon>
      </FullWidthButton>
    </Box>
  );
};

export default SelectCourseForm;
