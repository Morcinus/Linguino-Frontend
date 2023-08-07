// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { Typography } from "@mui/material";

import SubscriptionOverview from "components/layouts/SubscriptionOverview/SubscriptionOverview";

export interface ISubscriptionPage {}

const SubscriptionPage: React.FC<ISubscriptionPage> = () => {
  const { user } = useAuth();
  const { t } = useTranslation("cs", "common");

  return (
    <>
      {user && user.currentSubscriptionId ? (
        <SubscriptionOverview
          userId={user.id}
          subscriptionId={user.currentSubscriptionId}
        />
      ) : (
        <Typography variant="body1">
          {t("subscription.notSubscribed")}
        </Typography>
      )}
    </>
  );
};

export default SubscriptionPage;
