// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ImageCard from "components/atoms/cards/ImageCard/ImageCard";
import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";

export interface ISubscribedPage {}

const SubscribedPage: React.FC<ISubscribedPage> = () => {
  const router = useRouter();
  const { t } = useTranslation("cs", "common");

  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {t("subscribed.thankYou")}
      </Typography>

      <ImageCard url="/images/thank-you.png" />

      <Typography variant="body1" sx={{ textAlign: "center", mb: 8 }}>
        {t("subscribed.subscriptionActivated")}
      </Typography>

      <FullWidthButton onClick={() => router.push("/")}>
        {t("userActions.continue")}
      </FullWidthButton>
    </Box>
  );
};

export default SubscribedPage;
