import { ResponsiveTimeRange } from "@nivo/calendar";
import { BasicTooltip } from "@nivo/tooltip";

import { ICalendarDataPoint } from "../../../../domain/models/types/calendar";

export interface ICalendarHeatmap {
  data: Array<ICalendarDataPoint>;
  maxValue: number;
  from: string | Date;
  to: string | Date;
}

const CalendarHeatmap: React.FC<ICalendarHeatmap> = ({
  data,
  maxValue,
  from,
  to,
}) => {
  return (
    <div style={{ height: "180px", width: "250px" }}>
      <ResponsiveTimeRange
        weekdayTicks={[0, 1, 2, 3, 4, 5, 6]} // custom weekday tickmarks
        direction="vertical"
        data={data}
        maxValue={maxValue}
        dayRadius={6}
        from={from}
        to={to}
        emptyColor={"#ffffff"}
        colors={["#d8e476", "#c4da4a", "#aed135", "#8dbe40", "#6d9b40"]}
        tooltip={({ day, color, value }) => (
          <BasicTooltip
            id={day}
            value={`${value}/${maxValue}`}
            color={color}
            enableChip
          />
        )}
        weekdayLegendOffset={0}
        monthLegendOffset={0}
      />
    </div>
  );
};

function date30DaysAgo() {
  var date = new Date();
  var last = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000);
  return last;
}

export default CalendarHeatmap;
