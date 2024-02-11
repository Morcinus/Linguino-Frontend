import { useTranslation } from "i18n/client";
import useAuth from "infrastructure/services/AuthProvider";

import { ReactNode, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import { CircularProgress, Container } from "@mui/material";

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
        <Container
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CircularProgress color="inherit" />
          {t("loading")}
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
