import { useEffect, useState } from "react";

import { Box, Container } from "@mui/material";

import {
  ExerciseProgress,
  ExerciseType
} from "../../../../domain/models/types/exercises";
import { StudySession } from "../../../../domain/models/types/studySessions";
import StudySessionAPI from "../../../../infrastructure/api/StudySessionAPI";
import { useScroll } from "../../../hooks/useScroll";
import StudyExpansionBar from "../../atoms/StudyExpansionBar/StudyExpansionBar";
import StudyExpansionContent from "../../atoms/StudyExpansionContent/StudyExpansionContent";
import TextExercise from "../../atoms/TextExercise/TextExercise";

export interface IStudySession {
  sessionInfo: StudySession;
  lessonId?: ID;
  onFinish?: (progressArray: Array<ExerciseProgress>) => void;
  onWrongAnswer?: () => void;
  onContinue?: () => void;
}

interface IRenderExercise {
  type: ExerciseType;
}

const content = "# Hello world \n ldsfjafld jdlafjafdjsl";

const StudySession: React.FC<IStudySession> = ({
  sessionInfo,
  lessonId,
  onFinish,
  onWrongAnswer,
  onContinue,
}) => {
  const [finishedSession, setFinishedSession] = useState(false);
  const [index, setIndex] = useState(0);
  const [openExpansion, setOpenExpansion] = useState(false);
  const [executeScroll, elRef] = useScroll();
  const { data: exerciseArray, isLoading } = StudySessionAPI.useStudySession(
    sessionInfo?.sessionType,
    lessonId
  );
  const { trigger } = StudySessionAPI.useStudySessionMutation(
    sessionInfo?.sessionType,
    lessonId
  );
  const [progressArray, setProgressArray] = useState<Array<ExerciseProgress>>(
    []
  );

  const addProgress = (id: ID) => {
    setProgressArray(() => {
      let index = progressArray.findIndex((x) => x.exerciseId === id);
      if (index === -1) {
        return [...progressArray, { exerciseId: id, attempts: 1 }];
      } else {
        let arr = [...progressArray];
        arr[index].attempts += 1;
        return arr;
      }
    });
  };

  function handleWrong() {
    exerciseArray.push(exerciseArray[index]);
    if (typeof onWrongAnswer === "function") onWrongAnswer();
  }

  function handleContinue() {
    addProgress(exerciseArray[index].id);
    if (typeof onContinue === "function") onContinue();
    if (index < exerciseArray.length - 1) {
      setIndex(index + 1);
    } else {
      setFinishedSession(true);
    }
  }

  useEffect(() => {
    if (finishedSession) {
      trigger(progressArray);
      if (typeof onFinish === "function") onFinish(progressArray);
    }

    // Must not depend on finishedSession!
    // https://stackoverflow.com/a/59468261/13082130
  }, [JSON.stringify(progressArray)]);

  function RenderExercise({ type }: IRenderExercise) {
    let props = {
      exercise: exerciseArray[index],
      onContinue: handleContinue,
      onWrong: handleWrong,
    };
    switch (type) {
      case "LONG_TEXT":
        return <TextExercise {...props} variant="long" />;
      case "SHORT_TEXT":
        return <TextExercise {...props} variant="short" />;
      default:
        return <></>;
    }
  }

  function toggleExpansion() {
    if (openExpansion) setOpenExpansion(false);
    else {
      setOpenExpansion(true);
    }
  }

  useEffect(() => {
    if (openExpansion) executeScroll();
  }, [openExpansion]);

  return (
    <>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="sm">
            {!isLoading && exerciseArray ? (
              !finishedSession ? (
                <RenderExercise type={exerciseArray[index].type} />
              ) : (
                <p>session finished</p>
              )
            ) : (
              "Loading..."
            )}
          </Container>
        </Box>

        <StudyExpansionBar onClick={toggleExpansion} open={openExpansion} />
      </Box>

      <StudyExpansionContent
        open={openExpansion}
        reference={elRef}
        content={content}
      />
    </>
  );
};

export default StudySession;
