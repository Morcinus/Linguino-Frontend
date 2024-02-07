export interface Reaction {
  id: ReactionId;
  counter: number;
  reactedByUser: boolean;
}

export type ReactionId =
  | "light_bulb"
  | "brain"
  | "muscle"
  | "meat"
  | "skull"
  | "bullseye"
  | "thumbs_up"
  | "heart_eyes";
