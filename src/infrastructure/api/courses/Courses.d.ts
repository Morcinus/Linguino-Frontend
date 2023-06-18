import { Language } from "domain/models/types/languages";
import { Topic } from "infrastructure/api/courses/topics/Topics";

export interface Course {
  id: ID;
  name: string;
  language1: Language;
  language2: Language;
  thumbnailURL: string;
  featuredTopics?: Array<Topic>;
}
