export interface Topic {
  id: Id;
  name: string;
  thumbnailUrl?: string;
  enabled: boolean;
  category: "main" | "extra";
}

export interface FeaturedTopic extends Topic {
  thumbnailUrl: string;
}
