import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";

import { CreateSubscriptionResponseDTO, Subscription } from "./Subscriptions";

export interface SubscriptionParams {}

const SubscriptionsAPI = {
  URI: (userId: ID) => `users/${userId}/subscriptions`,

  useSubscription(
    userId: ID,
    id: ID
  ): Modify<FetchHook<Subscription>, { subscription: Subscription }> {
    const { data, ...rest } = useAPI<Subscription>(`${this.URI(userId)}/${id}`);
    return { subscription: data, ...rest };
  },

  async createSubscription(
    userId: ID,
    subscription: Pick<Subscription, "planId">
  ): Promise<CreateSubscriptionResponseDTO> {
    return API.post(`${this.URI(userId)}`, subscription);
  },

  async updateSubscription(
    userId: ID,
    subscription: Partial<Subscription>
  ): Promise<Subscription> {
    return API.put(`${this.URI(userId)}/${subscription.id}`, subscription);
  },

  async deleteSubscription(
    userId: ID,
    subscription: Subscription
  ): Promise<Subscription> {
    return API.delete(`${this.URI(userId)}/${subscription.id}`);
  },
};

export default SubscriptionsAPI;
