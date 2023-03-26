import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { ReactNode } from "react";

import { useRouter } from "next/navigation";

import { Typography } from "@mui/material";

export interface IUnauthenticatedOnlyRoute {
  children: ReactNode;
}

const UnauthenticatedOnlyRoute: React.FC<IUnauthenticatedOnlyRoute> = ({
  children,
}) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t } = useTranslation("cs", "common");

  if (loading) {
    return <Typography>{t("loading")}</Typography>;
  }

  if (!loading && user) {
    router.push("/");
    return <></>;
  }

  return <>{children}</>;
};

export default UnauthenticatedOnlyRoute;
