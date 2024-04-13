import DefaultNavigationBar from "../../top-navigation-bars/DefaultNavigationBar/DefaultNavigationBar";
import { IDrawerContainer } from "./DrawerContainer";

const base: IDrawerContainer = {
  child: {
    component: DefaultNavigationBar,
  },
};

export const mockDrawerContainerProps = {
  base,
};
