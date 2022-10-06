import { IStudyExpansionBar } from "./StudyExpansionBar";

const opened: IStudyExpansionBar = {
  onClick: () => {
    console.log("Click");
  },
  open: true,
};

const closed: IStudyExpansionBar = {
  onClick: () => {
    console.log("Click");
  },
  open: false,
};

export const mockStudyExpansionBarProps = {
  opened,
  closed,
};
