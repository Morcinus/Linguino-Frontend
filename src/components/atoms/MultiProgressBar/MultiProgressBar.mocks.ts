import { IMultiProgressBar } from "./MultiProgressBar";

const base: IMultiProgressBar = {
  data: [
    { goal: 100, progress: 50 },
    { goal: 30, progress: 30 },
    { goal: 50, progress: 40 },
  ],
};

const many: IMultiProgressBar = {
  data: [
    { goal: 100, progress: 50 },
    { goal: 30, progress: 30 },
    { goal: 50, progress: 40 },
    { goal: 50, progress: 0 },
    { goal: 30, progress: 30 },
    { goal: 50, progress: 40 },
  ],
};

export const mockMultiProgressBarProps = {
  base,
  many,
};
