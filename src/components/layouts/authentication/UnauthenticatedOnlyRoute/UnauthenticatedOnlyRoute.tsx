import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { ReactNode, useEffect } from "react";

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

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [loading, user, router]);

  return (
    <>{loading || user ? <Typography>{t("loading")}</Typography> : children}</>
  );
};

export default UnauthenticatedOnlyRoute;
