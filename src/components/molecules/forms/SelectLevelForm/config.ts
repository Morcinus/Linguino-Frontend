export const levelOptions: Array<LevelOption> = [
  {
    id: "a1",
  },
  {
    id: "a2",
  },
  {
    id: "b1",
  },
  {
    id: "b2",
  },
  {
    id: "c1",
  },
  {
    id: "c2",
  },
];

export interface LevelOption {
  id: LevelOptionId;
}

export type LevelOptionId = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
