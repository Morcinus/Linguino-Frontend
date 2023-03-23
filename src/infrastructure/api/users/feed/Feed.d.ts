export type FeedItem = FeedArticle | FeedVideo | FeedMessage;

export interface FeedArticle {
  id: ID;
  seenByUser?: boolean;
  title: string;
  imageURL: string;
  link: string;
  type: "article";
}

export interface FeedVideo {
  id: ID;
  seenByUser?: boolean;
  title: string;
  videoId: ID;
  type: "video";
}

export interface FeedMessage {
  id: ID;
  seenByUser?: boolean;
  author: string;
  message: string;
  authorAvatarURL: string;
  reactions: Array<Reaction>;
  publishedAt: Date;
  type: "message";
}

export interface Reaction {
  counter: number;
  text: string;
  reactedByUser: boolean;
}
