export const startOptions: Array<StartOption> = [
  {
    id: "startFromZero",
    imageURL: "https://picsum.photos/id/168/512/512",
  },
  {
    id: "selectLevel",
    imageURL: "https://picsum.photos/id/168/512/512",
  },
  {
    id: "takeTest",
    imageURL: "https://picsum.photos/id/168/512/512",
  },
];

export interface StartOption {
  id: StartOptionId;
  imageURL: string;
}

export type StartOptionId = "startFromZero" | "selectLevel" | "takeTest";
