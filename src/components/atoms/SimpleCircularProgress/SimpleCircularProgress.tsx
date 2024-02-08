import { ResponsivePie } from "@nivo/pie";

import { ReactNode } from "react";

export interface ISimpleCircularProgress {
  progress: number;
  color: string;
  animate?: boolean;
  showTooltip?: boolean;
  size?: "small" | "medium" | "large";
  thickness?: "thin" | "medium" | "thick";
  children?: ReactNode;
}

const SimpleCircularProgress: React.FC<ISimpleCircularProgress> = ({
  progress,
  size = "medium",
  color,
  animate = false,
  thickness = "medium",
  showTooltip = false,
  children,
}) => {
  let SIZE;
  switch (size) {
    case "small":
      SIZE = 200;
      break;
    case "medium":
      SIZE = 250;
      break;
    case "large":
      SIZE = 400;
      break;
    default:
      SIZE = 300;
      break;
  }

  let THICKNESS;
  switch (thickness) {
    case "thin":
      THICKNESS = 0.9;
      break;
    case "medium":
      THICKNESS = 0.8;
      break;
    case "thick":
      THICKNESS = 0.7;
      break;
    default:
      THICKNESS = 0.8;
      break;
  }

  const pieProps = {
    innerRadius: THICKNESS,
    cornerRadius: 20,
    enableArcLabels: false,
    enableArcLinkLabels: false,
    colors: { datum: "data.color" },
  };

  return (
    <div style={{ width: `${SIZE}px`, height: `${SIZE}px` }}>
      <div
        style={{
          position: "absolute",
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          zIndex: -2,
        }}
      >
        <ResponsivePie
          data={[{ id: "background", color: "#f5f5f5", value: 100 }]}
          isInteractive={false}
          {...pieProps}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          zIndex: -1,
        }}
      >
        <ResponsivePie
          data={[
            { color: color, id: "progress", value: progress },
            { color: "rgba(0, 0, 0, 0)", id: "empty", value: 100 - progress },
          ]}
          activeInnerRadiusOffset={10}
          isInteractive={showTooltip}
          animate={animate}
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
        {children}
      </div>
    </div>
  );
};

export default SimpleCircularProgress;
