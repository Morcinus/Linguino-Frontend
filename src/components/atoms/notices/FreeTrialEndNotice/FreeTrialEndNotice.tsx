import { useTranslation } from "i18n/client";
import { FreeTrialEndNotice as FreeTrialEndNoticeType } from "infrastructure/api/user/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";

import { useRouter } from "next/navigation";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

import { featureIdList } from "./config";

export interface IFreeTrialEndNotice {
  notice: FreeTrialEndNoticeType;
}

const FreeTrialEndNotice: React.FC<IFreeTrialEndNotice> = ({ notice }) => {
  const { deleteNotice } = useNotices();
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <FullscreenDialog
      header1={t("notices.freeTrialEnded")}
      header2={t("freeTrialEndNotice.title")}
      imageURL="https://picsum.photos/id/168/512/512"
      primaryButton={{
        onClick: () => {
          deleteNotice(notice.id);
          router.push("/subscription");
        },
        text: t("notices.extendSubscription"),
      }}
      secondaryButton={{
        onClick: () => deleteNotice(notice.id),
        text: t("notices.continueWithFreeAccount"),
      }}
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
    >
      <List sx={{ listStyleType: "disc", pl: 4 }}>
        {featureIdList.map((featureId, i) => (
          <ListItem sx={{ display: "list-item" }} key={i}>
            {t(`freeTrialEndNotice.${featureId}`)}
          </ListItem>
        ))}
      </List>
    </FullscreenDialog>
  );
};

export default FreeTrialEndNotice;
