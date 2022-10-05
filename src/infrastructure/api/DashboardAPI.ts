import { ICalendarDataPoint } from "../../domain/models/types/calendar";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class DashboardAPI {
  private static readonly URI = "dashboard";

  public static useDailyLearnButton(): FetchHook {
    return useAPI([`${this.URI}/daily-learn-button`]);
  }

  public static useStudyCalendar(): Modify<
    FetchHook,
    { data: { maxValue: number; data: Array<ICalendarDataPoint> } }
  > {
    return useAPI([`${this.URI}/study-calendar`]);
  }
}
