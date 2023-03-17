import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Achievement } from "./Achievements";

export interface AchievementParams {}

const AchievementsAPI = {
  URI: "achievements",

  useAchievements(
    params: AchievementParams = {}
  ): Modify<
    FetchHook<Array<Achievement>>,
    { achievements: Array<Achievement> }
  > {
    const { data, ...rest } = useAPI<Array<Achievement>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { achievements: data, ...rest };
  },

  async updateAchievement(
    achievement: Partial<Achievement>
  ): Promise<Achievement> {
    return API.put(`${this.URI}/${achievement.id}`, achievement);
  },
};

export default AchievementsAPI;
