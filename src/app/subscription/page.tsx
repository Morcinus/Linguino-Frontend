// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import ImageCard from "components/atoms/cards/ImageCard/ImageCard";

import styles from "./page.module.css";

export interface ISubscriptionPage {}

const FEATURES_LIST_LENGTH = 4;

const SubscriptionPage: React.FC<ISubscriptionPage> = () => {
  const router = useRouter();
  const { t } = useTranslation("cs", "common");
  const { user } = useAuth();

  function listFeatures() {
    const markup = [];

    for (let i = 0; i < FEATURES_LIST_LENGTH; i++) {
      markup.push(
        <ListItem sx={{ display: "list-item" }} key={i}>
          {t(`subscription.subscribedFeatures.${i}`)}
        </ListItem>
      );
    }

    return markup;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      {user?.activeSubscription ? (
        <>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {t("subscription.subscribedHeader")}
          </Typography>

          <ImageCard url="/images/subscription/subscribed.png" />

          <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 2 }}>
            {`${t("subscription.subscribedFeaturesHeader")}:`}
          </Typography>

          <List sx={{ listStyleType: "disc", pl: 4 }}>{listFeatures()}</List>

          <Button
            onClick={() => router.push("/manage-subscription")}
            variant="outlined"
            sx={{ my: 2 }}
          >
            {t("subscription.manageSubscription")}
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {t("subscription.subscriptionHeader")}
          </Typography>

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

          <Button
            onClick={() => router.push("/payment")}
            variant="contained"
            size="large"
            sx={{ my: 2 }}
          >
            {t("subscription.getSubscription")}
          </Button>
        </>
      )}
    </Box>
  );
};

export default SubscriptionPage;
