import { Language } from "domain/models/types/languages";
import { FeaturedTopic } from "infrastructure/api/user/topics/Topics";

export interface Course {
  id: ID;
  name: string;
  language1: Language;
  language2: Language;
  thumbnailURL?: string;
  featuredTopics?: Array<FeaturedTopic>;
}
