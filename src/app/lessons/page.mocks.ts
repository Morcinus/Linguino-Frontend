import { ILessonsPage } from "./page";

const grammar: ILessonsPage = {
  searchParams: {
    type: "GRAMMAR",
  },
};

const vocabulary: ILessonsPage = {
  searchParams: {
    type: "VOCABULARY",
  },
};

const listening: ILessonsPage = {
  searchParams: {
    type: "LISTENING",
  },
};

const reading: ILessonsPage = {
  searchParams: {
    type: "READING",
  },
};

const pronunciation: ILessonsPage = {
  searchParams: {
    type: "PRONUNCIATION",
  },
};

const speaking: ILessonsPage = {
  searchParams: {
    type: "SPEAKING",
  },
};

export const mockLessonsPageProps = {
  grammar,
  speaking,
  pronunciation,
  reading,
  listening,
  vocabulary,
};
