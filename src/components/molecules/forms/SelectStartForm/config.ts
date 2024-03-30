export const startOptions: Array<StartOption> = [
  {
    id: "startFromZero",
    imageUrl: "/images/account-setup/start_1.png",
  },
  {
    id: "selectLevel",
    imageUrl: "/images/account-setup/start_2.png",
  },
  {
    id: "takeTest",
    imageUrl: "/images/account-setup/start_3.png",
  },
];

export interface StartOption {
  id: StartOptionId;
  imageUrl: string;
}

export type StartOptionId = "startFromZero" | "selectLevel" | "takeTest";
