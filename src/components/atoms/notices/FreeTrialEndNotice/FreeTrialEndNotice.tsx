import { useTranslation } from "i18n/client";
import { FreeTrialEndNotice as FreeTrialEndNoticeType } from "infrastructure/api/users/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";

import { useRouter } from "next/navigation";

import { List, ListItem } from "@mui/material";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface IFreeTrialEndNotice {
  userId: ID;
  notice: FreeTrialEndNoticeType;
}

const FreeTrialEndNotice: React.FC<IFreeTrialEndNotice> = ({
  userId,
  notice,
}) => {
  const { deleteNotice } = useNotices();
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

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
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
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
};

export default FreeTrialEndNotice;
