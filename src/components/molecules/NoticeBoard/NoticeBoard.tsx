import { useTranslation } from "i18n/client";
import { Notice } from "infrastructure/api/users/notices/Notices";
import {
  isAchievementNotice,
  isFreeTrialEndNotice,
} from "infrastructure/api/users/notices/NoticesGuard";
import useNotices from "infrastructure/services/NoticeProvider";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { List, ListItem } from "@mui/material";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface INoticeBoard {
  userId: ID;
  fetchNewNotices?: boolean;
}

const NoticeBoard: React.FC<INoticeBoard> = ({
  userId,
  fetchNewNotices = false,
}) => {
  const { notices, popNotice, deleteNotice, fetchNotices } = useNotices();
  const [fetched, setFetched] = useState(false);
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

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

    if (isFreeTrialEndNotice(notice)) {
      return (
        <FullscreenDialog
          header1={t("notices.freeTrialEnded")}
          header2={notice.name}
          imageURL={notice.imageURL}
          primaryButton={{
            onClick: () => {
              deleteNotice(userId, notice.id);
              router.push("/subscription");
            },
            text: t("notices.extendSubscription"),
          }}
          secondaryButton={{
            onClick: () => deleteNotice(userId, notice.id),
            text: t("notices.continueWithFreeAccount"),
          }}
        >
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            {notice.featureList.map((item, i) => (
              <ListItem sx={{ display: "list-item" }} key={i}>
                {item}
              </ListItem>
            ))}
          </List>
        </FullscreenDialog>
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
