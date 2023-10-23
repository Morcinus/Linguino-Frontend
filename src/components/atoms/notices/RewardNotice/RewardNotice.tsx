import { useTranslation } from "i18n/client";
import { RewardNotice as RewardNoticeType } from "infrastructure/api/user/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface IRewardNotice {
  notice: RewardNoticeType;
}

const RewardNotice: React.FC<IRewardNotice> = ({ notice }) => {
  const { popNotice } = useNotices();
  const { t } = useTranslation("cs", "common");

  return (
    <FullscreenDialog
      header2={t("notices.rewardGet")}
      imageURL="https://picsum.photos/id/168/512/512"
      text={`${notice.reward} ${t("notices.coins")}`}
      primaryButton={{
        onClick: () => popNotice(),
        text: t("userActions.continue"),
      }}
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
    />
  );
};

export default RewardNotice;
