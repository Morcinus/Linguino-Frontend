import { StudyStats } from "infrastructure/api/user/notices/Notices";
import {
  isNewGrammar,
  isNewVocabulary,
} from "infrastructure/api/user/study-session/ExercisesGuard";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import { useEffect, useState } from "react";

import { Box, Container, Icon, IconButton, Toolbar } from "@mui/material";

import StudySessionProgressBar from "components/atoms/StudySessionProgressBar/StudySessionProgressBar";

import { getExplanation } from "../../../domain/models/utils/type-guards";
import { Exercise } from "../../../infrastructure/api/user/study-session/Exercises";
import { QuestionAttempt } from "../../../infrastructure/api/user/study-session/QuestionAttempt";
import { useScroll } from "../../../util/hooks/useScroll";
import StudyExpansionBar from "../../atoms/StudyExpansionBar/StudyExpansionBar";
import StudyExpansionContent from "../../atoms/StudyExpansionContent/StudyExpansionContent";
import ExerciseContainer from "../ExerciseContainer/ExerciseContainer";
import NewGrammar from "../exercises/NewGrammar/NewGrammar";
import NewVocabulary from "../exercises/NewVocabulary/NewVocabulary";

export interface IStudySession {
  exercises: Array<Exercise>;
  onFinish: (studyStats: StudyStats, attempts: Array<QuestionAttempt>) => void;
  onExit: () => void;
  displayExplanations?: boolean;
}

const StudySession: React.FC<IStudySession> = ({
  exercises,
  onFinish,
  onExit,
  displayExplanations = true,
}) => {
  const { user } = useAuth();
  const [finishedSession, setFinishedSession] = useState(false);
  const [index, setIndex] = useState(0);
  const [openExpansion, setOpenExpansion] = useState(false);
  const [executeScroll, elRef] = useScroll();

  const [attemptArray, setAttemptArray] = useState<Array<QuestionAttempt>>([]);
  const [exerciseQueue, setExerciseQueue] =
    useState<Array<Exercise>>(exercises);

  function nextExercise() {
    if (index < exerciseQueue.length - 1) {
      setIndex(index + 1);
    }
  }

  async function handleFinished(attemptArray: Array<QuestionAttempt>) {
    setFinishedSession(true);
    onFinish(evaluateStats(attemptArray), attemptArray);
  }

  function handleContinue(
    attempts: Array<QuestionAttempt>,
    reschedule: boolean
  ) {
    const arr = [...attemptArray, ...attempts];
    setAttemptArray(arr);

    if (reschedule) {
      setExerciseQueue((old: Array<Exercise>) => {
        return [...old, old[index]];
      });
      setIndex(index + 1);
    } else {
      nextExercise();

      if (index >= exerciseQueue.length - 1) handleFinished(arr);
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
  }, [openExpansion, executeScroll]);

  function renderNewVocabulary(exercise: Exercise) {
    if (isNewVocabulary(exercise))
      return (
        <>
          {user && (
            <NewVocabulary
              courseId={user.selectedCourse.id}
              lessonItemId={exercise.lessonItemId}
              onContinue={() => {
                nextExercise();
                if (index >= exerciseQueue.length - 1)
                  handleFinished(attemptArray);
              }}
            />
          )}
        </>
      );
    else return "";
  }

  function renderNewGrammar(exercise: Exercise) {
    if (isNewGrammar(exercise))
      return (
        <>
          {user && (
            <NewGrammar
              courseId={user.selectedCourse.id}
              lessonId={exercise.lessonId}
              onContinue={() => {
                nextExercise();
                if (index >= exerciseQueue.length - 1)
                  handleFinished(attemptArray);
              }}
            />
          )}
        </>
      );
    else return "";
  }

  function evaluateStats(attemptArray: Array<QuestionAttempt>) {
    let rightAnswers = 0;
    let wrongAnswers = 0;

    attemptArray.forEach((attempt) => {
      attempt.states.forEach((state) => {
        if (state === "RIGHT") rightAnswers++;
        else if (state === "WRONG") wrongAnswers++;
      });
    });

    return { rightAnswers, wrongAnswers };
  }

  return (
    <Box>
      <Container maxWidth="md">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <StudySessionProgressBar
            value={index}
            maxValue={exerciseQueue.length}
          />

          <IconButton onClick={() => onExit()}>
            <Icon>{icons.close}</Icon>
          </IconButton>
        </Toolbar>
      </Container>

      <Box sx={{ height: "85vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="sm">
            {exerciseQueue[index] && !finishedSession && (
              <>
                {isNewVocabulary(exerciseQueue[index]) ? (
                  renderNewVocabulary(exerciseQueue[index])
                ) : isNewGrammar(exerciseQueue[index]) ? (
                  renderNewGrammar(exerciseQueue[index])
                ) : (
                  <ExerciseContainer
                    key={index}
                    exercise={exerciseQueue[index]}
                    onContinue={handleContinue}
                  />
                )}
              </>
            )}
          </Container>
        </Box>

        {displayExplanations &&
        exerciseQueue !== undefined &&
        exerciseQueue[index] !== undefined &&
        "explanation" in exerciseQueue[index] ? (
          <StudyExpansionBar onClick={toggleExpansion} open={openExpansion} />
        ) : (
          <></>
        )}
      </Box>

      {displayExplanations &&
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
    </Box>
  );
};

export default StudySession;
