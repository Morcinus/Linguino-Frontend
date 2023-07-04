import { useTranslation } from "i18n/client";
import { AchievementNotice as AchievementNoticeType } from "infrastructure/api/users/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface IAchievementNotice {
  notice: AchievementNoticeType;
}

const AchievementNotice: React.FC<IAchievementNotice> = ({ notice }) => {
  const { popNotice } = useNotices();
  const { t } = useTranslation("cs", "common");

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
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
    />
  );
};

export default AchievementNotice;
