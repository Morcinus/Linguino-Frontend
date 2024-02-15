import { QuestionAttempt } from "infrastructure/api/user/courses/study-session/QuestionAttempt";
import StudySessionAPI from "infrastructure/api/user/courses/study-session/StudySessionAPI";
import { StudyStats } from "infrastructure/api/user/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";

import { useRouter } from "next/navigation";

import StudySession from "components/molecules/StudySession/StudySession";

export interface IDailyStudy {
  courseId: ID;
}

const DailyStudy: React.FC<IDailyStudy> = ({ courseId }) => {
  const { addNotices } = useNotices();
  const router = useRouter();
  const { exercises, isLoading } = StudySessionAPI.useStudySession(courseId);

  async function handleSessionFinish(
    studyStats: StudyStats,
    attempts: Array<QuestionAttempt>
  ) {
    const { reward } = await StudySessionAPI.updateStudySession(
      courseId,
      attempts.map((attempt) => {
        const totalAnswers = attempt.states.length;
        const rightAnswers = attempt.states.filter(
          (answer) => answer === "RIGHT"
        ).length;

        const answerRating =
          rightAnswers === totalAnswers
            ? 100
            : rightAnswers === 0
            ? 0
            : (rightAnswers / totalAnswers) * 100;

        return {
          answerRating,
          exerciseId: attempt.exerciseId,
        };
      })
    );

    addNotices([
      {
        id: "study_advertisement_notice",
        type: "ADVERTISEMENT",
      },
      {
        id: "study_stats_notice",
        type: "STUDY_STATS",
        stats: studyStats,
      },
      {
        id: "study_reward_notice",
        type: "REWARD",
        reward: reward,
      },
    ]);
    router.push("/");
  }

  return (
    <>
      {!isLoading && exercises && (
        <StudySession
          exercises={exercises}
          onFinish={handleSessionFinish}
          onExit={() => router.push("/")}
        />
      )}
    </>
  );
};

export default DailyStudy;
