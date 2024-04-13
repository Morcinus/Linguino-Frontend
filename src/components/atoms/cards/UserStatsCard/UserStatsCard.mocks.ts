import { IUserStatsCard } from "./UserStatsCard";

const base: IUserStatsCard = {
  streak: 12,
  learningStats: [
    {
      date: "2023-06-12T14:31:38+0000",
      points: 20,
    },
    {
      date: "2023-06-11T14:31:38+0000",
      points: 50,
    },
    {
      date: "2023-06-10T14:31:38+0000",
      points: 40,
    },
    {
      date: "2023-06-09T14:31:38+0000",
      points: 15,
    },
    {
      date: "2023-06-08T14:31:38+0000",
      points: 30,
    },
    {
      date: "2023-06-07T14:31:38+0000",
      points: 22,
    },
    {
      date: "2023-06-06T14:31:38+0000",
      points: 10,
    },
  ],
};

export const mockUserStatsCardProps = {
  base,
};
