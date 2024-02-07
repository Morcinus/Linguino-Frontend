export interface ICalendarDataPoint {
  value: number;
  day: DateYYYYMMDD;
}

type DateYYYYMMDD =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
