import { ResponsiveLine } from "@nivo/line";
import { BasicTooltip } from "@nivo/tooltip";
import { useTranslation } from "i18n/client";
import { LearningDataPoint } from "infrastructure/api/users/Users";
import icons from "styles/icons";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";

export interface IUserStatsCard {
  streak: number;
  learningStats: Array<LearningDataPoint>;
}

const UserStatsCard: React.FC<IUserStatsCard> = ({
  streak,
  learningStats = [],
}) => {
  const { t } = useTranslation("cs", "common");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Card>
        <CardContent>
          <Box sx={{ width: "100%", height: "280px" }}>
            <ResponsiveLine
              data={[
                {
                  id: "userpoints",
                  data: learningStats.map((e) => {
                    return { x: e.date.slice(0, 10), y: e.points };
                  }),
                },
              ]}
              animate={true}
              pointSize={10}
              pointColor="white"
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              lineWidth={3}
              margin={{
                bottom: 20,
                left: 25,
                right: 10,
                top: 10,
              }}
              xFormat="time:%Y-%m-%d"
              xScale={{
                format: "%Y-%m-%d",
                precision: "day",
                type: "time",
                useUTC: false,
              }}
              axisBottom={{
                format: "%a",
                legendOffset: -12,
                tickValues: "every 1 days",
              }}
              tooltip={({ point }) => (
                <BasicTooltip id={point.data.xFormatted} value={point.data.y} />
              )}
              isInteractive
              useMesh
            ></ResponsiveLine>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ width: "50%" }}>
        <CardContent
          sx={{
            "&:last-child": {
              paddingBottom: 2,
            },
          }}
        >
          {" "}
          <Box display="flex" alignItems="center">
            <Icon sx={{ position: "relative", bottom: 2 }}>{icons.streak}</Icon>
            <Typography variant="body1" flexGrow={1}>
              {" "}
              {t("userProfile.streak")}
            </Typography>
            <Typography>{streak}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserStatsCard;
