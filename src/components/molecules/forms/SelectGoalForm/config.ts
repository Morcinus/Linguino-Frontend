export const goalOptions = [
  {
    id: "casual",
    value: 300000,
  },
  {
    id: "medium",
    value: 600000,
  },
  {
    id: "dedicated",
    value: 900000,
  },
  {
    id: "intense",
    value: 1200000,
  },
];

export interface GoalOption {
  id: Id;
  value: number;
}
