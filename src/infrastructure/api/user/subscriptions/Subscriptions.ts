export interface Subscription {
  id: ID;
  nextPayment: Date;
  subscriptionState: "ORDERED" | "PAID" | "CANCELLED" | "TRIAL";
  unsubscribeReason?: string;

  planPriceId: string;
}

export interface CreateSubscriptionResponseDTO {
  type: "setup" | "payment";
  clientSecret: string | null;
}
