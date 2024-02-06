import { useTranslation } from "i18n/client";
import { FreeTrialOfferNotice as FreeTrialOfferNoticeType } from "infrastructure/api/user/notices/Notices";
import SubscriptionsAPI from "infrastructure/api/users/subscriptions/SubscriptionsAPI";
import useNotices from "infrastructure/services/NoticeProvider";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";
import ImageCard from "components/atoms/cards/ImageCard/ImageCard";

import styles from "./FreeTrialOfferNotice.module.css";

export interface IFreeTrialOfferNotice {
  userId: ID;
  notice: FreeTrialOfferNoticeType;
}

const FreeTrialOfferNotice: React.FC<IFreeTrialOfferNotice> = ({
  userId,
  notice,
}) => {
  const { t } = useTranslation("cs", "common");
  const { deleteNotice } = useNotices();
  const router = useRouter();

  return (
    <FullscreenDialog
      header1={t("notices.freeTrialOfferHeader")}
      primaryButton={{
        onClick: async () => {
          await SubscriptionsAPI.createSubscription(userId, {
            subscriptionState: "TRIAL",
          });
          deleteNotice(notice.id);
          router.push("/subscription");
        },
        text: t("notices.tryForFree"),
      }}
      secondaryButton={{
        onClick: () => deleteNotice(notice.id),
        text: t("notices.declineFreeTrialOffer"),
      }}
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
    >
      <ImageCard url="/images/subscription/subscription.png" />

      <Box display="flex" flexDirection="column" sx={{ width: "90%" }}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}
        >
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {t("subscription.valuePropositions.0")}
          </Typography>
          <Box className={styles.imageWrapper}>
            <ImageCard url="/images/subscription/valueProposition0.png" />
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
          className={styles.valueRow}
        >
          <Box className={styles.imageWrapper}>
            <ImageCard url="/images/subscription/valueProposition1.png" />
          </Box>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {t("subscription.valuePropositions.1")}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}
        >
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {t("subscription.valuePropositions.2")}
          </Typography>
          <Box className={styles.imageWrapper}>
            <ImageCard url="/images/subscription/valueProposition2.png" />
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
        >
          <Box className={styles.imageWrapper}>
            <ImageCard url="/images/subscription/valueProposition3.png" />
          </Box>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {t("subscription.valuePropositions.3")}
          </Typography>
        </Box>
      </Box>
    </FullscreenDialog>
  );
};

export default FreeTrialOfferNotice;
