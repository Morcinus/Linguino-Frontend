import API from "infrastructure/api/API";

export interface FollowingParams {}

const UserFollowingAPI = {
  URI: "user/following",

  async followUser(userId: Id): Promise<void> {
    return API.put(`${this.URI}/${userId}`, {});
  },

  async unfollowUser(userId: Id): Promise<void> {
    return API.delete(`${this.URI}/${userId}`);
  },
};

export default UserFollowingAPI;
