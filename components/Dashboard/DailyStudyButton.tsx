import { ResponsivePie } from "@nivo/pie";
import { BasicTooltip } from "@nivo/tooltip";

import Link from "next/link";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";

import DashboardAPI from "../../api/DashboardAPI";
import { getLessonColor, getLessonName } from "../../util/functions/lessons";

interface GraphData {
  id: string;
  color: string;
  value: number;
}

const pieProps = {
  innerRadius: 0.8,
  cornerRadius: 20,
  colors: { datum: "data.color" },
  enableArcLabels: false,
  enableArcLinkLabels: false,
};

const SIZE = 150;

export default function DailyStudyButton() {
  const { data, isLoading } = DashboardAPI.useDailyLearnButton();

  return (
    <>
      {isLoading || (
        <>
          <div
            style={{
              position: "absolute",
              width: `${SIZE}px`,
              height: `${SIZE}px`,
              zIndex: 0,
            }}
          >
            <ResponsivePie
              data={emptyChartData(data)}
              isInteractive={false}
              {...pieProps}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: `${SIZE}px`,
              height: `${SIZE}px`,
              zIndex: 1,
            }}
          >
            <ResponsivePie
              data={fillChartData(data)}
              activeInnerRadiusOffset={10}
              tooltip={({ datum: { id, value, color } }) =>
                color === "rgba(0, 0, 0, 0)" ? (
                  <div />
                ) : (
                  <BasicTooltip
                    id={id}
                    value={value}
                    color={color}
                    enableChip
                  />
                )
              }
              {...pieProps}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: `${SIZE}px`,
              height: `${SIZE}px`,

              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <IconButton
              style={{
                width: 60,
                height: 60,
                zIndex: 2,
              }}
            >
              <Link href={"/daily-study"}>
                <PlayArrowIcon
                  fontSize="large"
                  style={{ transform: "scale(1.5)" }}
                />
              </Link>
            </IconButton>
          </div>
        </>
      )}
    </>
  );
}

function emptyChartData(array) {
  let newArray: GraphData[] = [];
  array.forEach((element) => {
    // Max Progress
    newArray.push({
      value: element.maxProgress,
      color: "#f5f5f5",
      id: element.lessonType,
    });

    // Space
    newArray.push({
      id: element.lessonType + "_space",
      value: 2,
      color: "rgba(0, 0, 0, 0)",
    });
  });
  return newArray;
}

function fillChartData(array) {
  let newArray: GraphData[] = [];
  array.forEach((element) => {
    // Progress
    newArray.push({
      value:
        element.progress <= element.maxProgress
          ? element.progress
          : element.maxProgress,
      color: getLessonColor(element.lessonType, "MAIN"),
      id: getLessonName(element.lessonType),
    });

    // Empty
    if (element.maxProgress - element.progress > 0) {
      newArray.push({
        id: element.lessonType + "_empty",
        value: element.maxProgress - element.progress,
        color: "rgba(0, 0, 0, 0)",
      });
    }

    // Space
    newArray.push({
      id: element.lessonType + "_space",
      value: 2,
      color: "rgba(0, 0, 0, 0)",
    });
  });
  return newArray;
}
