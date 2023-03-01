import { useSnackbar } from "notistack";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { usePathname, useRouter } from "next/navigation";

import config from "../../config/config";
import { User } from "../../domain/models/types/user";
import { useTranslation } from "../../i18n/client";
import AuthAPI from "../api/AuthAPI";
import { LocalStorageManager } from "../repositories/LocalStorageManager";

export interface AuthContextType {
  user?: User;
  loading: boolean;
  errors?: string[];
  login: (email: string, password: string) => void;
  signUp: (username: string, email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

// Source: https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User>();
  const [errors, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation("cs", "snack");
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const pathname = usePathname();

  const router = useRouter();

  // If page changes
  useEffect(() => {
    // Reset error state
    if (errors) setError(() => []);

    authCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    AuthAPI.getCurrentUser()
      .then(async (user) => {
        setUser(user);
      })
      .finally(() => {
        authCheck();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function login(email: string, password: string) {
    setLoading(true);
    setError(() => []);

    AuthAPI.login({ email, password })
      .then((user) => {
        setUser(user);
        router.push("/");
      })
      .catch((res) => {
        handleError(res.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function signUp(username: string, email: string, password: string) {
    setLoading(true);
    setError(() => []);

    AuthAPI.signUp({ username, email, password })
      .then((user) => {
        setUser(user);
        router.push("/");
      })
      .catch((res) => {
        handleError(res.response.data.error);
      })
      .finally(() => setLoading(false));
  }

  function logout() {
    setError(() => []);
    AuthAPI.logout();
    setUser(undefined);
    router.push("/login");
  }

  function authCheck() {
    if (
      !user &&
      pathname &&
      !config.publicRoutes.includes(pathname) &&
      !LocalStorageManager.userExists()
    ) {
      router.push("/login");
      setInitialLoading(false);
    } else {
      setInitialLoading(false);
    }
  }

  function handleError(error: string) {
    switch (error) {
      case "WRONG_EMAIL_OR_PASSWORD":
        setError((errors) => [...errors, "WRONG_EMAIL_OR_PASSWORD"]);
        break;
      case "USERNAME_TAKEN":
        setError((errors) => [...errors, "USERNAME_TAKEN"]);
        break;
      case "EMAIL_ADDDRESS_TAKEN":
        setError((errors) => [...errors, "EMAIL_ADDDRESS_TAKEN"]);
        break;
      default:
        enqueueSnackbar(t("general-error-message"), {
          variant: "error",
        });
        break;
    }
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      errors,
      login,
      signUp,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, errors]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
