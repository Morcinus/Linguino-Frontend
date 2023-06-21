import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";
import { useTranslation } from "i18n/client";
import { AchievementNotice } from "infrastructure/api/users/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";

export interface IAchievementNotice {
  notice: AchievementNotice;
}

const AchievementNotice: React.FC<IAchievementNotice> = ({
  notice,
}) => {
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
    />
  );
};

export default AchievementNotice;
