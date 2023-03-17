export interface Subscription {
  id: ID;
  nextPayment: Date;
  subscribed: boolean;
  unsubscribeReason?: string;
}
