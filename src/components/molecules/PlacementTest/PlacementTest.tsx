import PlacementTestAPI from "infrastructure/api/courses/placement-test/PlacementTestAPI";
import { StudyStats } from "infrastructure/api/user/notices/Notices";
import { QuestionAttempt } from "infrastructure/api/user/study-session/QuestionAttempt";

import StudySession from "../StudySession/StudySession";
import { LanguageLevel } from "../forms/SelectLevelForm/config";

export interface IPlacementTest {
  courseId: ID;
  onSubmit: (answer: LanguageLevel) => void;
  onCancel: () => void;
}

const PlacementTest: React.FC<IPlacementTest> = ({
  courseId,
  onSubmit,
  onCancel,
}) => {
  const { exercises, isLoading } = PlacementTestAPI.usePlacementTest(courseId);

  async function handleSessionFinish(
    studyStats: StudyStats,
    attempts: Array<QuestionAttempt>
  ) {
    const { userLevel } = await PlacementTestAPI.updatePlacementTest(
      courseId,
      attempts
    );
    onSubmit(userLevel);
  }

  return (
    <>
      {!isLoading && exercises && (
        <StudySession
          exercises={exercises}
          onFinish={handleSessionFinish}
          onExit={() => onCancel()}
          displayExplanations={false}
        />
      )}
    </>
  );
};

export default PlacementTest;
