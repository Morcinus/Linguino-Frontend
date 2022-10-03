import { Lesson } from "./lessons";

export interface SpeakingLesson extends Lesson {}

export type SpeakingLessons = Array<SpeakingLesson>;
