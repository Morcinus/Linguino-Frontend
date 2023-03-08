import { useTranslation } from "i18n/client";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import NavigationBar from "components/atoms/navigation/top-navigation-bars/NavigationBar/NavigationBar";

export interface IBackNavigationBar {
  header: string;
}

const BackNavigationBar: React.FC<IBackNavigationBar> = ({ header }) => {
  const { t } = useTranslation("cs", "common");
  const router = useRouter();
  return (
    <NavigationBar
      header={t(`navigation.${header}`)}
      leftIconButton={{
        icon: icons.back,
        onClick: () => {
          router.back();
        },
      }}
      color="neutral"
    />
  );
};

export default BackNavigationBar;
