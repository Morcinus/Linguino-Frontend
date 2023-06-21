import { Notice } from "infrastructure/api/users/notices/Notices";
import {
  isAchievementNotice,
  isFreeTrialEndNotice,
  isRatingSurveyNotice,
} from "infrastructure/api/users/notices/NoticesGuard";
import useNotices from "infrastructure/services/NoticeProvider";

import { useEffect, useState } from "react";

import AchievementNotice from "components/atoms/notices/AchievementNotice/AchievementNotice";
import FreeTrialEndNotice from "components/atoms/notices/FreeTrialEndNotice/FreeTrialEndNotice";
import RatingSurveyNotice from "components/atoms/notices/RatingSurveyNotice/RatingSurveyNotice";

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
  }

  return (
    <>
      {notices &&
        notices.length >= 0 &&
        notices[0] !== undefined &&
        renderNotice(notices[0])}
    </>
  );
};

export default NoticeBoard;
