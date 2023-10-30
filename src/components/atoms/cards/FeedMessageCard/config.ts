import { MessageType } from "infrastructure/api/user/feed/Feed";
import { ReactionId } from "infrastructure/api/user/feed/reactions/Reactions";

export const availableReactions: Array<{ text: string; id: ReactionId }> = [
  { text: "💡", id: "light_bulb" },
  { text: "🧠", id: "brain" },
  { text: "💪", id: "muscle" },
  { text: "🍗", id: "meat" },
  { text: "💀", id: "skull" },
  { text: "🎯", id: "bullseye" },
  { text: "👍", id: "thumbs_up" },
  { text: "😍", id: "heart_eyes" },
];

export const availableMessages: Array<MessageType> = [
  "reached_level_10",
  "reached_level_50",
  "reached_level_100",
];
