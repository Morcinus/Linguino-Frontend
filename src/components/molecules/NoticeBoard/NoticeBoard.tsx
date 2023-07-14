import { Notice } from "infrastructure/api/users/notices/Notices";
import {
  isAchievementNotice,
  isAdvertisementNotice,
  isFreeTrialEndNotice,
  isRatingSurveyNotice,
  isRewardNotice,
  isStudyStatsNotice,
} from "infrastructure/api/users/notices/NoticesGuard";
import useNotices from "infrastructure/services/NoticeProvider";

import { useEffect, useState } from "react";

import AchievementNotice from "components/atoms/notices/AchievementNotice/AchievementNotice";
import AdvertisementNotice from "components/atoms/notices/AdvertisementNotice/AdvertisementNotice";
import FreeTrialEndNotice from "components/atoms/notices/FreeTrialEndNotice/FreeTrialEndNotice";
import RatingSurveyNotice from "components/atoms/notices/RatingSurveyNotice/RatingSurveyNotice";
import RewardNotice from "components/atoms/notices/RewardNotice/RewardNotice";
import StudyStatsNotice from "components/atoms/notices/StudyStatsNotice/StudyStatsNotice";

export interface INoticeBoard {
  userId: ID;
  fetchNewNotices?: boolean;
}

const NoticeBoard: React.FC<INoticeBoard> = ({
  userId,
  fetchNewNotices = false,
}) => {
  const { notices, fetchNotices } = useNotices();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetchNewNotices && !fetched) {
      setFetched(true);

      fetchNotices(userId);
    }
  }, [userId, fetchNewNotices, fetchNotices, fetched]);

  function renderNotice(notice: Notice) {
    if (isAchievementNotice(notice)) {
      return <AchievementNotice notice={notice} />;
    }

    if (isFreeTrialEndNotice(notice)) {
      return <FreeTrialEndNotice notice={notice} userId={userId} />;
    }

    if (isRatingSurveyNotice(notice)) {
      return <RatingSurveyNotice notice={notice} userId={userId} />;
    }

    if (isRewardNotice(notice)) {
      return <RewardNotice notice={notice} />;
    }

    if (isAdvertisementNotice(notice)) {
      return <AdvertisementNotice />;
    }

    if (isStudyStatsNotice(notice)) {
      return <StudyStatsNotice notice={notice} />;
    }
  }

  return (
    <>
      {notices &&
        notices.length > 0 &&
        notices[0] !== undefined &&
        renderNotice(notices[0])}
    </>
  );
};

export default NoticeBoard;
