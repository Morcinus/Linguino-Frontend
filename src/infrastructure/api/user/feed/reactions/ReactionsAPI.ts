import API from "infrastructure/api/API";

export interface ReactionParams {}

const ReactionsAPI = {
  URI: (feedItemId: ID) => `user/feed/${feedItemId}/reactions`,

  async addReaction(feedItemId: ID, reactionId: ID): Promise<void> {
    return API.put(`${this.URI(feedItemId)}/${reactionId}`, {});
  },

  async deleteReaction(feedItemId: ID, reactionId: ID): Promise<void> {
    return API.delete(`${this.URI(feedItemId)}/${reactionId}`);
  },
};

export default ReactionsAPI;
