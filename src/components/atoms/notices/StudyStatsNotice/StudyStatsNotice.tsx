import { ResponsivePie } from "@nivo/pie";
import { useTranslation } from "i18n/client";
import { StudyStatsNotice as StudyStatsNoticeType } from "infrastructure/api/user/notices/Notices";
import useNotices from "infrastructure/services/NoticeProvider";
import theme from "styles/theme";

import { Box } from "@mui/material";

import FullscreenDialog from "components/atoms/FullscreenDialog/FullscreenDialog";

export interface IStudyStatsNotice {
  notice: StudyStatsNoticeType;
}

const StudyStatsNotice: React.FC<IStudyStatsNotice> = ({ notice }) => {
  const { popNotice } = useNotices();
  const { t } = useTranslation("cs", "common");

  return (
    <FullscreenDialog
      header2={t("notices.studySessionEnded")}
      primaryButton={{
        onClick: () => popNotice(),
        text: t("userActions.continue"),
      }}
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
    >
      <Box sx={{ width: "100%", height: "200px", mt: 4 }}>
        <ResponsivePie
          data={[
            { id: t("notices.rightAnswers"), value: notice.stats.rightAnswers },
            { id: t("notices.wrongAnswers"), value: notice.stats.wrongAnswers },
          ]}
          isInteractive={true}
          animate={true}
          innerRadius={0.7}
          padAngle={2}
          cornerRadius={20}
          enableArcLabels={false}
          enableArcLinkLabels={true}
          arcLinkLabelsDiagonalLength={8}
          arcLinkLabelsStraightLength={12}
          colors={[theme.palette.success.light, theme.palette.error.light]}
        />
      </Box>
    </FullscreenDialog>
  );
};

export default StudyStatsNotice;
