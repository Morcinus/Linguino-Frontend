import { IFreeTrialEndNotice } from "./FreeTrialEndNotice";

const base: IFreeTrialEndNotice = {
  userId: "abcdef",
  notice: {
    id: "123456",
    type: "FREE_TRIAL_END",
    name: "Prodlužte si předplatné a užívejte si tyto výhody:",
    featureList: [
      "Žádné reklamy!",
      "Pokročilá slovíčka",
      "Lidé s premium se statisticky učí rychleji!",
    ],
    imageURL: "https://picsum.photos/id/168/512/512",
  },
};

export const mockFreeTrialEndNoticeProps = {
  base,
};
