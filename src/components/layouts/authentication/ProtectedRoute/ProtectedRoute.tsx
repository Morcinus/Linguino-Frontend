import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { ReactNode } from "react";

import { useRouter } from "next/navigation";

import { Typography } from "@mui/material";

export interface IProtectedRoute {
  children: ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t } = useTranslation("cs", "common");

  if (loading) {
    return <Typography>{t("loading")}</Typography>;
  }

  if (!loading && !user) {
    router.push("/login");
    return <></>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
