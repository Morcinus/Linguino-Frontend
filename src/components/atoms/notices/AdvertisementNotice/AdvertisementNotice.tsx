import { useTranslation } from "i18n/client";
import useNotices from "infrastructure/services/NoticeProvider";

import { Box } from "@mui/material";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface IAdvertisementNotice {}

const AdvertisementNotice: React.FC<IAdvertisementNotice> = () => {
  const { popNotice } = useNotices();
  const { t } = useTranslation("cs", "common");

  return (
    <FullscreenDialog
      text={t("notices.advertisementNote")}
      primaryButton={{
        onClick: () => popNotice(),
        text: t("userActions.continue"),
      }}
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
    >
      <Box>{/*TODO: Add Advertisement here*/}</Box>
    </FullscreenDialog>
  );
};

export default AdvertisementNotice;
