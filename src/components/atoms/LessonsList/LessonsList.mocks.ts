import { ILessonsList } from "./LessonsList";

const base: ILessonsList = {
  lessons: [
    {
      id: "fsaklnkjdsafdasf",
      favorite: false,
      name: "Lorem ipsum 1",
      visible: true,
    },
    {
      id: "daggfafgfafddsaf",
      favorite: false,
      name: "Lorem ipsum 2",
      visible: true,
    },
    {
      id: "fsdaffgbnhdnff",
      favorite: false,
      name: "Lorem ipsum 3",
      visible: true,
    },
    {
      id: "ngsgdbdshsghsgh",
      favorite: false,
      name: "Lorem ipsum 4",
      visible: true,
    },
    {
      id: "sghsgdshdhhsdhsd",
      favorite: false,
      name: "Lorem ipsum 5",
      visible: true,
    },
  ],
};

export const mockLessonsListProps = {
  base,
};
