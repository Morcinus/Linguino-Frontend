import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";

import { UserProfile } from "./UserProfiles";

export interface UserProfileParams {}

const UserProfilesAPI = {
  URI: (userId: ID) => `users/${userId}/profile`,

  useUserProfile(
    userId: ID
  ): Modify<FetchHook<UserProfile>, { userProfile: UserProfile }> {
    const { data, ...rest } = useAPI<UserProfile>(`${this.URI(userId)}`);
    return { userProfile: data, ...rest };
  },

  async updateUserProfile(
    userId: ID,
    userProfile: Partial<UserProfile>
  ): Promise<UserProfile> {
    return API.put(`${this.URI(userId)}/${userProfile.id}`, userProfile);
  },
};

export default UserProfilesAPI;
