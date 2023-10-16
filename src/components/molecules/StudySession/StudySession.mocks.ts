import { action } from "@storybook/addon-actions";

import { IStudySession } from "./StudySession";

const base: IStudySession = {
  exercises: [
    {
      id: "fdsfsdfdsfsdfsd",
      lessonItemId: "123",
      type: "TEXT",
      assignmentTitle: "Přeložte do angličtiny 1",
      explanation: "# Hello world \n Lorem opossum",
      question: {
        id: "dsmaljdsa",
        question: "Brambora xx'x",
        answer: "xx'x",
        type: "TEXT",
      },
    },
    {
      id: "fdsfsdfdsfsdfsd",
      lessonItemId: "123",
      type: "TEXT",
      assignmentTitle: "Přeložte do angličtiny 1",
      question: {
        id: "dsmaljdsad",
        question: "Brambora yyy",
        answer: "yyy",
        type: "TEXT",
      },
    },
    {
      id: "gsggdsggsgfdsg",
      lessonItemId: "123",
      type: "TEXT",
      assignmentTitle: "Přeložte do angličtiny 1",
      question: {
        id: "dsmxaljdsa",
        question: "Brambora zzz",
        answer: "zzz",
        type: "TEXT",
      },
    },
  ],
  onFinish: action("onFinish"),
  onExit: action("onExit"),
};

export const mockStudySessionProps = {
  base,
};
