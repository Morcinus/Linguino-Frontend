export interface Topic {
  id: ID;
  name: string;
  thumbnailURL?: string;
  enabled: boolean;
  category: "main" | "extra";
}

export interface FeaturedTopic extends Topic {
  thumbnailURL: string;
}
