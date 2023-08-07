import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import { Subscription } from "infrastructure/api/users/subscriptions/Subscriptions";
import SubscriptionsAPI from "infrastructure/api/users/subscriptions/SubscriptionsAPI";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import MultipleChoiceCardList from "components/atoms/lists/MultipleChoiceCardList/MultipleChoiceCardList";

import common from "../../../../public/locales/cs/common.json";

export interface ISubscriptionOverview {
  userId: ID;
  subscriptionId: ID;
}

const SubscriptionOverview: React.FC<ISubscriptionOverview> = ({
  userId,
  subscriptionId,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );
  const { t } = useTranslation("cs", "common");
  const [page, setPage] = useState(0);
  const router = useRouter();

  const { subscription, mutate } = SubscriptionsAPI.useSubscription(
    userId,
    subscriptionId
  );

  function handleUnsubscribe() {
    const data: Subscription = {
      ...subscription,
      subscriptionState: "CANCELLED",
      unsubscribeReason: selectedIndex
        ? common.manageSubscription.unsubscribeReasons[selectedIndex]
        : undefined,
    };
    mutate(
      SubscriptionsAPI.updateSubscription(userId, data),
      optimisticMutationOption(data)
    );
  }

  return (
    <Box sx={{ minWidth: "80%" }}>
      {subscription && (
        <>
          {page === 0 ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Typography variant="subtitle1">
                    {t("manageSubscription.current")}
                  </Typography>
                  <Typography>
                    {`${t("manageSubscription.subscriptionState")}: ${t(
                      `subscription.subscriptionStates.${subscription.subscriptionState.toLowerCase()}`
                    )}`}
                  </Typography>
                  <Typography>
                    {`${t("manageSubscription.nextPayment")}: ${new Date(
                      subscription.nextPayment
                    ).toLocaleDateString()}`}
                  </Typography>
                </CardContent>
              </Card>
              <Button onClick={() => setPage(1)}>
                {t("manageSubscription.cancel")}
              </Button>
            </Box>
          ) : page === 1 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="subtitle1">
                {t("manageSubscription.whyUnsubscribe")}
              </Typography>
              <MultipleChoiceCardList
                selectedIndex={selectedIndex}
                choices={common.manageSubscription.unsubscribeReasons.map(
                  (reason) => {
                    return {
                      name: reason,
                    };
                  }
                )}
                onChange={(index) => setSelectedIndex(index)}
              />

              <Button
                onClick={() => setPage(2)}
                variant="contained"
                sx={{ alignSelf: "center" }}
                disabled={selectedIndex === undefined}
              >
                {t("manageSubscription.continue")}
              </Button>
            </Box>
          ) : page === 2 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h5">
                {t("manageSubscription.keep")}
              </Typography>
              <Box>
                <Typography variant="subtitle2">
                  {t("manageSubscription.youWontHaveAccessToThese")}
                </Typography>
                <ul>
                  {common.manageSubscription.premiumFeatures.map((_, i) => {
                    return (
                      <li key={i}>
                        <Typography>
                          {t(`subscription.premiumFeatures.${i}`)}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
              <Button onClick={() => router.push("/")} variant="contained">
                {t("manageSubscription.keepPremium")}
              </Button>
              <Button
                onClick={() => {
                  setPage(3);
                  handleUnsubscribe();
                }}
              >
                {t("manageSubscription.confirmCancellation")}
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                gap: 4,
              }}
            >
              <Typography variant="subtitle1">
                {t("manageSubscription.successfullyUnsubscibed")}
              </Typography>
              <Button onClick={() => router.push("/")} variant="contained">
                {t("navigation.home")}
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default SubscriptionOverview;
