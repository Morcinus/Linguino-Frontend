import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";

import { CreateSubscriptionResponseDTO, Subscription } from "./Subscriptions";

export interface SubscriptionParams {}

const SubscriptionAPI = {
  URI: "user/subscription",

  useSubscription(
    id: Id
  ): Modify<FetchHook<Subscription>, { subscription: Subscription }> {
    const { data, ...rest } = useAPI<Subscription>(`${this.URI}/${id}`);
    return { subscription: data, ...rest };
  },

  async createSubscription(): Promise<CreateSubscriptionResponseDTO> {
    return API.post(`${this.URI}`, {});
  },

  async updateSubscription(
    subscription: Partial<Subscription>
  ): Promise<Subscription> {
    return API.put(`${this.URI}/${subscription.id}`, subscription);
  },

  async startFreeTrial(): Promise<void> {
    return API.post(`${this.URI}/trial`, {});
  },
};

export default SubscriptionAPI;
