import { ITimer } from "./Timer";

const base: ITimer = {
  milliseconds: 5000,
  onFinish: () => {
    console.log("onFinish");
  },
};

export const mockTimerProps = {
  base,
};
