import { useTranslation } from "next-i18next";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import DashboardAPI from "../../../../infrastructure/api/DashboardAPI";
import CalendarHeatmap from "../../atoms/CalendarHeatmap/CalendarHeatmap";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStudyCalendar {}

const StudyCalendar: React.FC<IStudyCalendar> = () => {
  const { data, isLoading } = DashboardAPI.useStudyCalendar();
  const { t } = useTranslation("common");

  return !isLoading && data ? (
    <Card sx={{ maxWidth: "270px" }}>
      <CardContent
        sx={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          {t("calendar.calendar")}
        </Typography>
        <CalendarHeatmap
          data={data?.data}
          maxValue={data?.maxValue}
          from={new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)}
          to={new Date()}
        />
      </CardContent>
    </Card>
  ) : (
    <div>Loading...</div>
  );
};

export default StudyCalendar;
