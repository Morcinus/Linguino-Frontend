import icons from "styles/icons";

import NavigationBar from "components/atoms/navigation/top-navigation-bars/NavigationBar/NavigationBar";

import { IDrawerController } from "../../drawer/DrawerContainer/DrawerContainer";

export interface IDefaultNavigationBar extends IDrawerController {
  header?: string;
}

const DefaultNavigationBar: React.FC<IDefaultNavigationBar> = ({
  onDrawerOpen,
  header,
}) => {
  return (
    <NavigationBar
      leftIconButton={{
        icon: icons.menu,
        onClick: onDrawerOpen,
      }}
      color="neutral"
      header={header}
    />
  );
};

export default DefaultNavigationBar;
