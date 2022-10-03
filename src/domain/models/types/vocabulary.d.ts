import { Lesson } from "./lessons";

export interface VocabularyLesson extends Lesson {}

export type VocabularyLessons = Array<VocabularyLesson>;
