import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { ReactNode, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import Typography from "@mui/material/Typography";

export interface IProtectedRoute {
  children: ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t } = useTranslation("cs", "common");
  const pathname = usePathname();

  useEffect(() => {
    if (
      !loading &&
      user &&
      user?.accountInitialized !== true &&
      pathname !== "/account-setup"
    ) {
      router.push("/account-setup");
    }
  }, [loading, user, pathname, router]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  return (
    <>
      {loading ||
      (!loading && !user) ||
      (!loading &&
        user &&
        user?.accountInitialized !== true &&
        pathname !== "/account-setup") ? (
        <Typography>{t("loading")}</Typography>
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
