export interface Subscription {
  id: ID;
  nextPayment: Date;
  subscribed: boolean;
  unsubscribeReason?: string;

  planId: string;
}

export interface CreateSubscriptionResponseDTO {
  type: "setup" | "payment";
  clientSecret: string | null;
}
