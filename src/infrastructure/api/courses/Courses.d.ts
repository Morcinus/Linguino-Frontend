import { Topic } from "infrastructure/api/courses/topics/Topics";

export interface Course {
  id: ID;
  name: string;
  languageL1: string;
  thumbnailURL: string;
  featuredTopics?: Array<Topic>;
}
