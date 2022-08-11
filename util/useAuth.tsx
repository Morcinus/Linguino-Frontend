import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import { AuthAPI, User } from "../api/AuthAPI";
import { useSnackbar } from "notistack";

interface AuthContextType {
  user?: User;
  loading: boolean;
  error?: any;
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
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  // If page changes, reset error state
  useEffect(() => {
    if (error) setError(null);
  }, [router.pathname]);

  useEffect(() => {
    AuthAPI.getCurrentUser()
      .then((user) => setUser(user))
      .catch((error) => {
        /* There is no user*/
      })
      .finally(() => setLoadingInitial(false));
  }, []);

  function login(email: string, password: string) {
    setLoading(true);

    AuthAPI.login({ email, password })
      .then((user) => {
        setUser(user);
        router.push("/");
      })
      .catch((error) => handleError(error))
      .finally(() => setLoading(false));
  }

  function signUp(username: string, email: string, password: string) {
    setLoading(true);

    AuthAPI.signUp({ username, email, password })
      .then((user) => {
        setUser(user);
        router.push("/");
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => setLoading(false));
  }

  function logout() {
    AuthAPI.logout();
    setUser(undefined);
  }

  function handleError(error) {
    enqueueSnackbar("Nastala chyba, zkuste to prosím později.", {
      variant: "error",
    });
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signUp,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
