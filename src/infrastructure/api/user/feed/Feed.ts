import { Reaction } from "./reactions/Reactions";

export type FeedItem = FeedArticle | FeedVideo | FeedMessage;

export interface FeedArticle {
  id: Id;
  seenByUser?: boolean;
  title: string;
  imageURL: string;
  link: string;
  publishedAt: Date;
  type: "article";
}

export interface FeedVideo {
  id: Id;
  seenByUser?: boolean;
  title: string;
  videoId: Id;
  publishedAt: Date;
  type: "video";
}

export interface FeedMessage {
  id: Id;
  seenByUser?: boolean;
  author: string;
  message: MessageType;
  authorAvatarURL: string;
  reactions: Array<Reaction>;
  publishedAt: Date;
  type: "message";
}

export type MessageType =
  | "reached_level_10"
  | "reached_level_50"
  | "reached_level_100";
