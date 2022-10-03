import { Lesson } from "./lessons";

export interface PronunciationLesson extends Lesson {}

export type PronunciationLessons = Array<PronunciationLesson>;
