import { INavigationBar } from "./NavigationBar";

const primary: INavigationBar = {
  header: "Header",
  leftIconButton: {
    icon: "NavigateBefore",
  },
  rightIconButton: {
    icon: "NavigateNext",
  },
};

const transparent: INavigationBar = {
  header: "Header",
  leftIconButton: {
    icon: "NavigateBefore",
  },
  rightIconButton: {
    icon: "NavigateNext",
  },
};

export const mockNavigationBarProps = {
  primary,
  transparent,
};
