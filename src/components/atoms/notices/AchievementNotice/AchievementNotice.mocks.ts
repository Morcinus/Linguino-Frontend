import { IAchievementNotice } from "./AchievementNotice";

const base: IAchievementNotice = {
  notice: {
    id: "123",
    type: "ACHIEVEMENT",
    name: "Moudrý vševěd",
    description: "Nauč se aspoň 50 gramatických lekcí.",
    imageURL: "https://picsum.photos/id/168/512/512",
  },
};

export const mockAchievementNoticeProps = {
  base,
};
