export const startOptions: Array<StartOption> = [
  {
    id: "startFromZero",
    imageURL: "/images/account-setup/start_1.png",
  },
  {
    id: "selectLevel",
    imageURL: "/images/account-setup/start_2.png",
  },
  {
    id: "takeTest",
    imageURL: "/images/account-setup/start_3.png",
  },
];

export interface StartOption {
  id: StartOptionId;
  imageURL: string;
}

export type StartOptionId = "startFromZero" | "selectLevel" | "takeTest";
