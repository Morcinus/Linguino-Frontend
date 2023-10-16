// prettier-ignore
"use client"

import { SurveyAnswer } from "infrastructure/api/survey-answers/SurveyAnswers";
import SurveyAnswersAPI from "infrastructure/api/survey-answers/SurveyAnswersAPI";
import Courses from "infrastructure/api/users/courses/CoursesAPI";
import UsersAPI from "infrastructure/api/users/UsersAPI";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import NavigationBar from "components/atoms/navigation/top-navigation-bars/NavigationBar/NavigationBar";
import InitialSurveyForm from "components/molecules/forms/InitialSurveyForm/InitialSurveyForm";
import SelectCourseForm from "components/molecules/forms/SelectCourseForm/SelectCourseForm";
import { GoalOption } from "components/molecules/forms/SelectGoalForm/config";
import SelectGoalForm from "components/molecules/forms/SelectGoalForm/SelectGoalForm";
import { LevelOptionId } from "components/molecules/forms/SelectLevelForm/config";
import SelectLevelForm from "components/molecules/forms/SelectLevelForm/SelectLevelForm";
import { StartOptionId } from "components/molecules/forms/SelectStartForm/config";
import SelectStartForm from "components/molecules/forms/SelectStartForm/SelectStartForm";
import SelectTopicsForm from "components/molecules/forms/SelectTopicsForm/SelectTopicsForm";
import CoursesAPI from "infrastructure/api/courses/CoursesAPI";
import { Topic } from "infrastructure/api/courses/topics/Topics";

export interface IAccountSetupPage {}

const AccountSetupPage: React.FC<IAccountSetupPage> = () => {
  const { user, mutateUser } = useAuth();
  const [page, setPage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<ID>();
  const [selectedTopics, setSelectedTopics] = useState<Array<Topic>>();
  const [surveyAnswer, setSurveyAnswer] = useState<Omit<SurveyAnswer, "userId">>();
  const [selectedGoal, setSelectedGoal] = useState<GoalOption>();
  const [startOptionId, setStartOptionId] = useState<StartOptionId>();
  const [startingLevel, setStartingLevel] = useState<LevelOptionId>();

  function incrementPage() {
    setPage(page + 1);
  }

  function decrementPage() {
    if (page > 0) setPage(page - 1);
  }

  useEffect(() => {
    if (startingLevel) submitSetup();

    async function submitSetup() {
      if (!user) return;

      if (selectedTopics)
        Courses.createCourse(user.id, {
          selectedTopics: selectedTopics,
        });

      if (surveyAnswer)
        SurveyAnswersAPI.createSurveyAnswer({
          ...surveyAnswer,
          userId: user.id,
        });

      if (startingLevel && selectedCourse && selectedGoal) {
        const userChange = {
          id: user.id,
          startingLevel,
          selectedCourse: await CoursesAPI.getCourse(selectedCourse),
          dailyGoal: selectedGoal.value,
          accountInitialized: true,
        };

        UsersAPI.updateUser(userChange);
        mutateUser(userChange);
      }
    }
  }, [
    startingLevel,
    selectedCourse,
    selectedGoal,
    selectedTopics,
    surveyAnswer,
    user,
    mutateUser
  ]);

  useEffect(() => {
    if (startOptionId === "startFromZero") {
      setStartingLevel("a1");
    }
  }, [startOptionId, setStartingLevel]);

  return (
    <>
      {page !== 0 && (
        <NavigationBar
          leftIconButton={{
            icon: icons.back,
            onClick: () => {
              decrementPage();
            },
          }}
          color="transparent"
        />
      )}

      <Container sx={{ maxWidth: "500px" }}>
        {page === 0 ? (
          <SelectCourseForm
            onSubmit={(courseId) => {
              setSelectedCourse(courseId);
              incrementPage();
            }}
          />
        ) : page === 1 ? (
          <>
            {selectedCourse && (
              <SelectTopicsForm
                courseId={selectedCourse}
                onSubmit={(topics) => {
                  setSelectedTopics(topics);
                  incrementPage();
                }}
              />
            )}
          </>
        ) : page === 2 ? (
          <InitialSurveyForm
            onSubmit={(answer) => {
              setSurveyAnswer(answer);
              incrementPage();
            }}
          />
        ) : page === 3 ? (
          <SelectGoalForm
            onSubmit={(goal) => {
              setSelectedGoal(goal);
              incrementPage();
            }}
          />
        ) : page === 4 ? (
          <SelectStartForm
            onSubmit={(startOptionId) => {
              setStartOptionId(startOptionId);

              if (startOptionId !== "startFromZero") incrementPage();
            }}
          />
        ) : (
          <>
            {startOptionId === "selectLevel" && (
              <SelectLevelForm
                onSubmit={(levelOption) => setStartingLevel(levelOption.id)}
              />
            )}

            {/* TODO startOptionId === "takeTest" */}
          </>
        )}
      </Container>
    </>
  );
};

export default AccountSetupPage;
