import icons from "styles/icons";

import NavigationBar from "components/atoms/navigation/top-navigation-bars/NavigationBar/NavigationBar";

import { IDrawerController } from "../../drawer/DrawerContainer/DrawerContainer";

export interface IDefaultNavigationBar extends IDrawerController {}

const DefaultNavigationBar: React.FC<IDefaultNavigationBar> = ({
  onDrawerOpen,
}) => {
  return (
    <NavigationBar
      leftIconButton={{
        icon: icons.menu,
        onClick: onDrawerOpen,
      }}
      color="neutral"
    />
  );
};

export default DefaultNavigationBar;
