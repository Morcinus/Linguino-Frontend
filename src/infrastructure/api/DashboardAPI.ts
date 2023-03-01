import { DailyStudyData } from "../../app/components/molecules/DailyStudyButton";
import { ICalendarDataPoint } from "../../domain/models/types/calendar";
import { SWRHook } from "./API";
import useAPI from "./hooks/useAPI";

const DashboardAPI = {
  URI: "dashboard",

  useDailyLearnButton(): SWRHook<Array<DailyStudyData>> {
    return useAPI(`${this.URI}/daily-learn-button`);
  },

  useStudyCalendar(): SWRHook<{
    maxValue: number;
    data: Array<ICalendarDataPoint>;
  }> {
    return useAPI(`${this.URI}/study-calendar`);
  },
};

export default DashboardAPI;
