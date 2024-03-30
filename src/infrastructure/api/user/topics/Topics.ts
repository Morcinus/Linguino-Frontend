export interface Topic {
  id: Id;
  name: string;
  thumbnailURL?: string;
  enabled: boolean;
  category: "main" | "extra";
}

export interface FeaturedTopic extends Topic {
  thumbnailURL: string;
}
