export interface Topic {
  id: ID;
  name: string;
  thumbnailURL: string;
  enabled: boolean;
  tag?: "main" | "extra";
}
