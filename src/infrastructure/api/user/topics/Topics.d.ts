export interface Topic {
  id: ID;
  name: string;
  thumbnailURL?: string;
  enabled: boolean;
  category: "main" | "extra";
}

interface FeaturedTopic extends Topic {
  thumbnailURL: string;
}
