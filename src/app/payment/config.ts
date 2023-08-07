export const PLAN_ID = "price_1Nc45tC4N1Cw0gvFBLxcdkwX";
export const STRIPE_PUBLIC_KEY =
  "pk_test_51Nc3x5C4N1Cw0gvFtJbbekf056EZX4wMyIAeDNtg0oMasdcENWxcPMXMmNf8UTJXiftMFHgClWqvfJB9bUyo0awh00mbvyDkss";

export const PLAN_PRICING_OPTIONS: {
  mode: "subscription" | "payment" | "setup";
  amount: number;
  currency: string;
} = {
  mode: "subscription",
  amount: 900, // A positive integer representing how much to charge in the smallest currency unit (e.g., 900 cents to charge $9.00).
  currency: "usd",
};

export const PAYMENT_SUCCESS_URL = "http://localhost:3000/subscribed";
