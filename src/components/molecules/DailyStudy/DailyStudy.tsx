import { QuestionAttempt } from "domain/models/types/questionAttempts";
import { StudyStats } from "infrastructure/api/user/notices/Notices";
import StudySessionAPI from "infrastructure/api/user/study-session/StudySessionAPI";
import useNotices from "infrastructure/services/NoticeProvider";

import { useRouter } from "next/navigation";

import StudySession from "components/molecules/StudySession/StudySession";

export interface IDailyStudy {}

const DailyStudy: React.FC<IDailyStudy> = () => {
  const { addNotices } = useNotices();
  const router = useRouter();
  const { exercises, isLoading } = StudySessionAPI.useStudySession();

  async function handleSessionFinish(
    studyStats: StudyStats,
    attempts: Array<QuestionAttempt>
  ) {
    const { reward } = await StudySessionAPI.updateStudySession(attempts);

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
