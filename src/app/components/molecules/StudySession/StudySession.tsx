import { useEffect, useState } from "react";

import {
  ExerciseProgress,
  ExerciseType,
} from "../../../../domain/models/types/exercises";
import { LessonType } from "../../../../domain/models/types/lessons";
import StudySessionAPI from "../../../../infrastructure/api/StudySessionAPI";
import TextExercise from "../../atoms/TextExercise/TextExercise";

export interface IStudySession {
  lessonType: LessonType;
  lessonId?: string;
}

interface IRenderExercise {
  type: ExerciseType;
}

const StudySession: React.FC<IStudySession> = ({ lessonType, lessonId }) => {
  const [finishedSession, setFinishedSession] = useState(false);
  const [index, setIndex] = useState(0);
  const { data: exerciseArray, isLoading } = StudySessionAPI.useStudySession(
    lessonType,
    lessonId
  );
  const { trigger } = StudySessionAPI.useStudySessionMutation(
    lessonType,
    lessonId
  );
  const [progressArray, setProgressArray] = useState<Array<ExerciseProgress>>(
    []
  );

  const addProgress = (id: string) => {
    setProgressArray(() => {
      let index = progressArray.findIndex((x) => x.exerciseId === id);
      if (index === -1) {
        return [...progressArray, { exerciseId: id, attempts: 1 }];
      } else {
        let newProgressArray = progressArray;
        newProgressArray[index].attempts += 1;
        return newProgressArray;
      }
    });
  };

  function handleWrong() {
    exerciseArray.push(exerciseArray[index]);
  }

  function handleContinue() {
    addProgress(exerciseArray[index].id);
    if (index < exerciseArray.length - 1) {
      setIndex(index + 1);
    } else {
      setFinishedSession(true);
    }
  }

  useEffect(() => {
    if (finishedSession) trigger(progressArray);

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

  return (
    <>
      {!isLoading && exerciseArray ? (
        !finishedSession ? (
          <RenderExercise type={exerciseArray[index].type} />
        ) : (
          <p>session finished</p>
        )
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default StudySession;
