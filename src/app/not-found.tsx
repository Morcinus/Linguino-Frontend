// prettier-ignore
"use client";

import { useTranslation } from "i18n/client";

import { useRouter } from "next/navigation";

import { Box, Button, Typography } from "@mui/material";

import ImageCard from "components/atoms/cards/ImageCard/ImageCard";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

export default function NotFound() {
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <ContentContainer>
      <Box display="flex" flexDirection="column" sx={{ pt: 8 }}>
        <ImageCard url="/images/not-found.png" />
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {t("404.header")}
        </Typography>
        <Button onClick={() => router.push("/")} variant="contained">
          {t("404.backToHome")}
        </Button>
      </Box>
    </ContentContainer>
  );
}
