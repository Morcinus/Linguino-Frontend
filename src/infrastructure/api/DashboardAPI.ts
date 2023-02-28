import { ICalendarDataPoint } from "../../domain/models/types/calendar";
import { Modify } from "../../domain/models/utils/modify";
import { SWRHook } from "./API";
import useAPI from "./hooks/useAPI";

export default class DashboardAPI {
  private static readonly URI = "dashboard";

  public static useDailyLearnButton(): SWRHook {
    return useAPI(`${this.URI}/daily-learn-button`);
  }

  public static useStudyCalendar(): Modify<
    SWRHook,
    { data: { maxValue: number; data: Array<ICalendarDataPoint> } }
  > {
    return useAPI(`${this.URI}/study-calendar`);
  }
}
