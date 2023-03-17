import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Challenge } from "./Challenges";

export interface ChallengeParams {}

const ChallengesAPI = {
  URI: "challenges",

  useChallenges(
    params: ChallengeParams = {}
  ): Modify<FetchHook<Array<Challenge>>, { challenges: Array<Challenge> }> {
    const { data, ...rest } = useAPI<Array<Challenge>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { challenges: data, ...rest };
  },

  async updateChallenge(challenge: Partial<Challenge>): Promise<Challenge> {
    return API.put(`${this.URI}/${challenge.id}`, challenge);
  },
};

export default ChallengesAPI;
