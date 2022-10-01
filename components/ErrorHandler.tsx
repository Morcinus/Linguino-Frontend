import { useSnackbar } from "notistack";

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface ErrorContextType {
  setError: (message?: string) => void;
}

const ErrorContext = createContext<ErrorContextType>({} as ErrorContextType);

export function ErrorHandler({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [errorMessages, setErrorMessage] = useState<string[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation("snack");
  const router = useRouter();

  const setError = useCallback(
    (message?: string) => {
      if (!message) message = t("general-error-message");

      if (message && !errorMessages.includes(message)) {
        enqueueSnackbar(message);
        setErrorMessage((errorMessages) => [...errorMessages, `${message}`]);
      }
    },
    [enqueueSnackbar, errorMessages, t]
  );

  // Clear errors on path change
  useEffect(() => {
    if (Array.isArray(errorMessages) && errorMessages.length) {
      setErrorMessage((arr) => []);
    }
  }, [errorMessages, router.pathname]);

  const memoedValue = useMemo(
    () => ({
      setError,
    }),
    [setError]
  );

  return (
    <ErrorContext.Provider value={memoedValue}>
      {children}
    </ErrorContext.Provider>
  );
}

export default function useErrorHandler(): ErrorContextType {
  return useContext(ErrorContext);
}
