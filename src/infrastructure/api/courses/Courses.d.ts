export interface Course {
  id: ID;
  name: string;
  languageL1: string;
  thumbnailURL: string;
  featuredTopics?: Array<Topic>;
}

export interface CourseTopic {
  id: ID;
  name: string;
  thumbnailURL: string;
}
