import { Language } from "domain/models/types/languages";
import { useTranslation } from "i18n/client";
import { languages } from "i18n/settings";
import CoursesAPI from "infrastructure/api/courses/CoursesAPI";
import icons from "styles/icons";

import { useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import IconContainer from "components/atoms/IconContainer/IconContainer";
import SimpleCard from "components/atoms/cards/SimpleCard/SimpleCard";
import CardGrid from "components/layouts/CardGrid/CardGrid";

export interface ISelectCourseForm {
  onSubmit: (courseId: Id) => void;
  omitCourseIds?: Array<Id>;
}

const SelectCourseForm: React.FC<ISelectCourseForm> = ({
  onSubmit,
  omitCourseIds,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [selectedCourseId, setSelectedCourseId] = useState<Id | undefined>();
  const { t: tLanguages } = useTranslation("languages");
  const { t: tForm } = useTranslation("form");
  const { t: tCommon } = useTranslation("common");
  const { courses } = CoursesAPI.useCourses({ language1: selectedLanguage });

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
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
              setSelectedLanguage(e.target.value as Language);
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
            cards={courses
              .filter(
                (course) =>
                  !omitCourseIds?.some((courseId) => courseId === course.id)
              )
              .map((course) => {
                return {
                  component: SimpleCard,
                  props: {
                    header: course.name,
                    imageUrl: course.thumbnailUrl,
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
        <IconContainer name={icons.next} />
      </FullWidthButton>
    </Box>
  );
};

export default SelectCourseForm;
