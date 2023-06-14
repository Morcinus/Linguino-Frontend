import { useTranslation } from "i18n/client";
import { CourseTopic } from "infrastructure/api/courses/Courses";
import CoursesAPI from "infrastructure/api/courses/CoursesAPI";
import icons from "styles/icons";

import { useState } from "react";

import { Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import SimpleCard from "components/atoms/cards/SimpleCard/SimpleCard";
import CardGrid from "components/layouts/CardGrid/CardGrid";

export interface ISelectTopicsForm {
  onSubmit: (topics: Array<CourseTopic>) => void;
  courseId: ID;
}

const SelectTopicsForm: React.FC<ISelectTopicsForm> = ({
  onSubmit,
  courseId,
}) => {
  const [selectedTopics, setSelectedTopics] = useState<Array<CourseTopic>>([]);
  const { t: tForm } = useTranslation("cs", "form");
  const { t: tCommon } = useTranslation("cs", "common");
  const { course } = CoursesAPI.useCourse(courseId);

  function handleTopicToggle(topic: CourseTopic) {
    const newTopics = [...selectedTopics];
    const index = newTopics.findIndex((t: CourseTopic) => t.id === topic.id);

    if (index === -1) {
      newTopics.push(topic);
    } else {
      newTopics.splice(index, 1);
    }

    setSelectedTopics(newTopics);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box>
        <Typography variant="subtitle1">
          {tForm("accountSetup.selectTopic")}
        </Typography>
        <Typography variant="body2" mb={1}>
          {tForm("accountSetup.selectTopicDescription")}
        </Typography>

        {course && course.featuredTopics && (
          <CardGrid
            align="left"
            cards={course.featuredTopics.map((topic) => {
              return {
                component: SimpleCard,
                props: {
                  header: topic.name,
                  imageURL: topic.thumbnailURL,
                  highlightCard: selectedTopics.some((t) => t.id === topic.id),
                  highlightVariant: "outlined",
                  onClick: () => handleTopicToggle(topic),
                },
              };
            })}
          />
        )}
      </Box>

      <FullWidthButton
        onClick={() => {
          onSubmit(selectedTopics);
        }}
        disabled={selectedTopics.length === 0}
      >
        {tCommon("navigation.continue")}
        <Icon>{icons.next}</Icon>
      </FullWidthButton>
    </Box>
  );
};

export default SelectTopicsForm;