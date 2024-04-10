export interface Subscription {
  id: Id;
  nextPayment: Date;
  subscriptionState: "ORDERED" | "PAID" | "CANCELLED" | "TRIAL";
  unsubscribeReason?: string;
}

export interface CreateSubscriptionResponseDTO {
  type: "setup" | "payment";
  clientSecret: string | null;
}
