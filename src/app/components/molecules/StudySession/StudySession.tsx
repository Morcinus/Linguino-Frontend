import { useEffect, useState } from "react";

import { Box, Container } from "@mui/material";

import { Exercise } from "../../../../domain/models/types/exercises";
import { QuestionAttempt } from "../../../../domain/models/types/questionAttempts";
import { StudySession as StudySessionType } from "../../../../domain/models/types/studySessions";
import { getExplanation } from "../../../../domain/models/utils/type-guards";
import StudySessionAPI from "../../../../infrastructure/api/StudySessionAPI";
import { useScroll } from "../../../hooks/useScroll";
import StudyExpansionBar from "../../atoms/StudyExpansionBar/StudyExpansionBar";
import StudyExpansionContent from "../../atoms/StudyExpansionContent/StudyExpansionContent";
import ExerciseContainer from "../ExerciseContainer/ExerciseContainer";

export interface IStudySession {
  session: StudySessionType;
  onFinish?: () => void;
  onContinue?: (reschedule: boolean) => void;
}

const StudySession: React.FC<IStudySession> = ({
  session,
  onFinish,
  onContinue,
}) => {
  const [finishedSession, setFinishedSession] = useState(false);
  const [index, setIndex] = useState(0);
  const [openExpansion, setOpenExpansion] = useState(false);
  const [executeScroll, elRef] = useScroll();
  const { data, isLoading } = StudySessionAPI.useStudySession(session);
  const [attemptArray, setAttemptArray] = useState<Array<QuestionAttempt>>([]);
  const [exerciseQueue, setExerciseQueue] = useState<Array<Exercise>>([]);

  useEffect(() => {
    if (!isLoading && data && exerciseQueue.length === 0) {
      setExerciseQueue(data);
    }
  }, [data, isLoading, exerciseQueue.length]);

  function nextExercise() {
    if (index < exerciseQueue.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleFinished(attemptArray: Array<QuestionAttempt>) {
    setFinishedSession(true);
    StudySessionAPI.updateStudySession(session, attemptArray);
    onFinish?.();
  }

  function handleContinue(
    attempts: Array<QuestionAttempt>,
    reschedule: boolean
  ) {
    const arr = [...attemptArray, ...attempts];
    setAttemptArray(arr);

    if (reschedule) {
      setExerciseQueue((old) => {
        return [...old, old[index]];
      });
      setIndex(index + 1);
    } else {
      nextExercise();

      if (index >= exerciseQueue.length - 1) handleFinished(arr);
    }

    onContinue?.(reschedule);
  }

  function toggleExpansion() {
    if (openExpansion) setOpenExpansion(false);
    else {
      setOpenExpansion(true);
    }
  }

  useEffect(() => {
    if (openExpansion) executeScroll();
  }, [openExpansion, executeScroll]);

  return (
    <>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="sm">
            {!isLoading && exerciseQueue[index] ? (
              !finishedSession ? (
                <ExerciseContainer
                  exercise={exerciseQueue[index]}
                  onContinue={handleContinue}
                />
              ) : (
                <p>session finished</p>
              )
            ) : (
              "Loading..."
            )}
          </Container>
        </Box>

        {!isLoading &&
        exerciseQueue !== undefined &&
        exerciseQueue[index] !== undefined &&
        "explanation" in exerciseQueue[index] ? (
          <StudyExpansionBar onClick={toggleExpansion} open={openExpansion} />
        ) : (
          <></>
        )}
      </Box>

      {!isLoading &&
      exerciseQueue !== undefined &&
      exerciseQueue[index] !== undefined &&
      "explanation" in exerciseQueue[index] ? (
        <StudyExpansionContent
          open={openExpansion}
          reference={elRef}
          content={getExplanation(exerciseQueue[index])}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default StudySession;
