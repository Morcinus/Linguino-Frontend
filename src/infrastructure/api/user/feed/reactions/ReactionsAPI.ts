import API from "infrastructure/api/API";

export interface ReactionParams {}

const ReactionsAPI = {
  URI: (feedItemId: Id) => `user/feed/${feedItemId}/reactions`,

  async addReaction(feedItemId: Id, reactionId: Id): Promise<void> {
    return API.put(`${this.URI(feedItemId)}/${reactionId}`, {});
  },

  async deleteReaction(feedItemId: Id, reactionId: Id): Promise<void> {
    return API.delete(`${this.URI(feedItemId)}/${reactionId}`);
  },
};

export default ReactionsAPI;
