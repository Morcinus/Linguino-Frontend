import { IRewardNotice } from "./RewardNotice";

const base: IRewardNotice = {
  notice: {
    id: "abc",
    reward: 10,
    type: "REWARD",
  },
};

export const mockRewardNoticeProps = {
  base,
};
