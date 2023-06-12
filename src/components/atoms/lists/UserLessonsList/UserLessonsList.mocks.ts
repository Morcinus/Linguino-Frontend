import { IUserLessonsList } from "./UserLessonsList";

const base: IUserLessonsList = {
  lessons: [
    {
      id: "fsaklnkjdsafdasf",
      name: "Lorem ipsum 1",
      url: "lessons/1",
    },
    {
      id: "daggfafgfafddsaf",
      name: "Lorem ipsum 2",
      url: "lessons/2",
    },
    {
      id: "fsdaffgbnhdnff",
      name: "Lorem ipsum 3",
      url: "lessons/3",
    },
    {
      id: "ngsgdbdshsghsgh",
      name: "Lorem ipsum 4",
      url: "lessons/4",
    },
    {
      id: "sghsgdshdhhsdhsd",
      name: "Lorem ipsum 5",
      url: "lessons/5",
    },
  ],
};

export const mockUserLessonsListProps = {
  base,
};
