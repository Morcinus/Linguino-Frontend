import { INavigationBar } from "./NavigationBar";

const primary: INavigationBar = {
  header: "Header",
  leftIconButton: {
    icon: "NavigateBefore",
  },
  rightIconButton: {
    icon: "NavigateNext",
  },
  variant: "primary",
};

const transparent: INavigationBar = {
  header: "Header",
  leftIconButton: {
    icon: "NavigateBefore",
  },
  rightIconButton: {
    icon: "NavigateNext",
  },
  variant: "transparent",
};

export const mockNavigationBarProps = {
  primary,
  transparent,
};
