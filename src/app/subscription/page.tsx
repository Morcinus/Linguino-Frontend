// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import SubscriptionOverview from "components/layouts/SubscriptionOverview/SubscriptionOverview";

export interface ISubscriptionPage {}

const SubscriptionPage: React.FC<ISubscriptionPage> = () => {
  const { user } = useAuth();

  return (
    <>
      {user && user.currentSubscriptionId ? (
        <SubscriptionOverview
          userId={user.id}
          subscriptionId={user.currentSubscriptionId}
        />
      ) : (
        "Not subscribed"
      )}
    </>
  );
};

export default SubscriptionPage;
