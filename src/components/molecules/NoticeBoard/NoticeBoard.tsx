import { useTranslation } from "i18n/client";
import { Notice } from "infrastructure/api/users/notices/Notices";
import { isAchievementNotice } from "infrastructure/api/users/notices/NoticesGuard";
import useNotices from "infrastructure/services/NoticeProvider";

import { useEffect, useState } from "react";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface INoticeBoard {
  userId: ID;
  fetchNewNotices?: boolean;
}

const NoticeBoard: React.FC<INoticeBoard> = ({
  userId,
  fetchNewNotices = false,
}) => {
  const { notices, popNotice, fetchNotices } = useNotices();
  const [fetched, setFetched] = useState(false);
  const { t } = useTranslation("cs", "common");

  useEffect(() => {
    if (fetchNewNotices && !fetched) {
      setFetched(true);

      fetchNotices(userId);
    }
  }, [userId, fetchNewNotices, fetchNotices, fetched]);

  function renderNotice(notice: Notice) {
    if (isAchievementNotice(notice)) {
      return (
        <FullscreenDialog
          header1={t("notices.achievementGet")}
          imageURL={notice.imageURL}
          header2={notice.name}
          text={notice.description}
          primaryButton={{
            onClick: () => popNotice(),
            text: t("userActions.continue"),
          }}
        />
      );
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
