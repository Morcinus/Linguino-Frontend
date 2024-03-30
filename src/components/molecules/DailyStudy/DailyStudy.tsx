import { QuestionAttempt } from "infrastructure/api/user/courses/study-session/QuestionAttempt";
import StudySessionAPI from "infrastructure/api/user/courses/study-session/StudySessionAPI";
import { Notice, StudyStats } from "infrastructure/api/user/notices/Notices";
import useAuth from "infrastructure/services/AuthProvider";
import useNotices from "infrastructure/services/NoticeProvider";

import { useRouter } from "next/navigation";

import StudySession from "components/molecules/StudySession/StudySession";

export interface IDailyStudy {
  courseId: Id;
}

const DailyStudy: React.FC<IDailyStudy> = ({ courseId }) => {
  const { addNotices } = useNotices();
  const router = useRouter();
  const { exercises, isLoading } = StudySessionAPI.useStudySession(courseId);
  const { user } = useAuth();

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

    const notices: Array<Notice> =
      user?.role === "PREMIUM_USER"
        ? []
        : [
            {
              id: "study_advertisement_notice",
              type: "ADVERTISEMENT",
            },
          ];

    addNotices(
      notices.concat([
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
      ])
    );
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
