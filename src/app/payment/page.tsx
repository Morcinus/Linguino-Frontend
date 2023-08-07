// prettier-ignore
"use client"

import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { useTranslation } from "i18n/client";
import SubscriptionsAPI from "infrastructure/api/users/subscriptions/SubscriptionsAPI";
import useAuth from "infrastructure/services/AuthProvider";
import { useSnackbar } from "notistack";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography
} from "@mui/material";

import { PAYMENT_SUCCESS_URL, PLAN_ID, PLAN_PRICING_OPTIONS } from "./config";

export interface IPaymentPage {}

const PaymentPage: React.FC<IPaymentPage> = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const router = useRouter();
  const { t } = useTranslation("cs", "common");
  const { enqueueSnackbar } = useSnackbar();
  const [needInvoice, setNeedInvoice] = useState(false);

  useEffect(() => {
    if (router && user?.currentSubscriptionId) {
      router.push("/subscription");
    }
  }, [user, router]);

  function handleError(message?: string) {
    console.error(message);
    enqueueSnackbar(t("payment.generalPaymentErrorMessage"), {
      variant: "error",
    });
  }

  // Documentation source: https://stripe.com/docs/payments/accept-a-payment-deferred?platform=web&type=subscription
  async function handleSubscribe() {
    if (!user?.id || !stripe || !elements) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError.message);
      return;
    }

    const { type, clientSecret } = await SubscriptionsAPI.createSubscription(
      user.id,
      { planId: PLAN_ID }
    );
    if (clientSecret) {
      const confirmIntent =
        type === "setup" ? stripe.confirmSetup : stripe.confirmPayment;

      const { error: intentError } = await confirmIntent({
        elements,
        clientSecret,
        confirmParams: {
          return_url: PAYMENT_SUCCESS_URL,
        },
      });

      if (intentError) {
        handleError(intentError.message);
      }
    }
  }

  return (
    <Box
      sx={{ width: "100%" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6">{t("payment.monthlySubscription")}</Typography>
        <Typography variant="h5">{`${t("payment.perMonth", {
          val: PLAN_PRICING_OPTIONS.amount / 100,
        })}`}</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <PaymentElement />
        <Typography
          variant="caption"
          sx={{ mt: 1, color: "#6d6e78", lineHeight: 1.45, display: "block" }}
        >
          {t("payment.subscriptionDisclaimer")}
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <FormControlLabel
          label={t("payment.iWantToReceiveInvoice")}
          control={
            <Checkbox
              checked={needInvoice}
              onChange={(e) => setNeedInvoice(e.target.checked)}
            />
          }
        />
        {needInvoice && <AddressElement options={{ mode: "billing" }} />}
      </Box>

      <Box>
        <Button onClick={handleSubscribe} variant="contained" size="large">
          {t("payment.buySubscription")}
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentPage;
