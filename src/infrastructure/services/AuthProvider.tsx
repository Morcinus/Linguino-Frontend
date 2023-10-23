import errorCodes from "infrastructure/api/error-codes";
import { UserPrivate } from "infrastructure/api/user/User";
import { LocalStorageManager } from "infrastructure/repositories/LocalStorageManager";
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

import { useTranslation } from "../../i18n/client";
import AuthManager from "../repositories/AuthManager";

export interface AuthContextType {
  user?: UserPrivate;
  loading: boolean;
  errors?: string[];
  login: (email: string, password: string) => void;
  signUp: (username: string, email: string, password: string) => void;
  logout: () => void;
  mutateUser: (userChange: Partial<UserPrivate>) => void;
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
  const [user, setUser] = useState<UserPrivate>();
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

    setInitialLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    setLoading(true);

    AuthManager.getCurrentUser()
      .then(async (user) => {
        setUser(user);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  function login(email: string, password: string) {
    setLoading(true);
    setError(() => []);

    AuthManager.login({ email, password })
      .then((user) => {
        setUser(user);
        router.push("/");
      })
      .catch((errorCode) => {
        handleError(errorCode);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function signUp(username: string, email: string, password: string) {
    setLoading(true);
    setError(() => []);

    AuthManager.signUp({ username, email, password })
      .then((user) => {
        setUser(user);
      })
      .catch((errorCode) => {
        handleError(errorCode);
      })
      .finally(() => setLoading(false));
  }

  function logout() {
    setLoading(true);
    setError(() => []);
    AuthManager.logout();
    setUser(undefined);
    setLoading(false);
    router.push("/login");
  }

  function handleError(error: string) {
    switch (error) {
      case errorCodes.wrongEmailOrPassword:
        setError((errors) => [...errors, errorCodes.wrongEmailOrPassword]);
        break;
      case errorCodes.usernameTaken:
        setError((errors) => [...errors, errorCodes.usernameTaken]);
        break;
      case errorCodes.emailAddressTaken:
        setError((errors) => [...errors, errorCodes.emailAddressTaken]);
        break;
      case errorCodes.passwordTooShort:
        setError((errors) => [...errors, errorCodes.passwordTooShort]);
        break;
      case errorCodes.invalidEmailAddress:
        setError((errors) => [...errors, errorCodes.invalidEmailAddress]);
        break;
      case errorCodes.invalidUsername:
        setError((errors) => [...errors, errorCodes.invalidUsername]);
        break;
      default:
        enqueueSnackbar(t("general-error-message"), {
          variant: "error",
        });
        break;
    }
  }

  function mutateUser(userChange: Partial<UserPrivate>) {
    if (user) {
      const newUser = { ...user, ...userChange };

      setUser(newUser);
      LocalStorageManager.setUser(newUser);
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
      mutateUser,
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
