import { FeedArticle, FeedItem, FeedMessage, FeedVideo } from "./Feed";

export function isFeedArticle(feedItem: FeedItem): feedItem is FeedArticle {
  return (feedItem as FeedArticle).type === "article";
}

export function isFeedVideo(feedItem: FeedItem): feedItem is FeedVideo {
  return (feedItem as FeedVideo).type === "video";
}

export function isFeedMessage(feedItem: FeedItem): feedItem is FeedMessage {
  return (feedItem as FeedMessage).type === "message";
}
