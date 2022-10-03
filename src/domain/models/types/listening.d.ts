import { Lesson } from "./lessons";

export interface ListeningLesson extends Lesson {}

export type ListeningLessons = Array<ListeningLesson>;
