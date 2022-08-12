import { useSnackbar } from "notistack";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { AuthAPI, User } from "../api/AuthAPI";

interface AuthContextType {
  user?: User;
  loading: boolean;
  errors?: string[];
  login: (email: string, password: string) => void;
  signUp: (username: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

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
  const { t } = useTranslation("snack");

  const router = useRouter();

  // If page changes, reset error state
  useEffect(() => {
    if (errors) setError([]);
  }, [router.pathname]);

  useEffect(() => {
    AuthAPI.getCurrentUser()
      .then((user) => setUser(user))
      .catch((error) => {
        /* There is no user*/
      });
  }, []);

  function login(email: string, password: string) {
    setLoading(true);
    setError([]);

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
    setError([]);

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
    setError([]);
    AuthAPI.logout();
    setUser(undefined);
  }

  function handleError(error: string) {
    console.log("Error", error);
    switch (error) {
      case "WRONG_EMAIL_OR_PASSWORD":
        setError([...errors, "WRONG_EMAIL_OR_PASSWORD"]);
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
    [user, loading, errors]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
