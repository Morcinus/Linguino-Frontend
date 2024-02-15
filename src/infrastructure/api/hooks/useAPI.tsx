import useSWR, { Key } from "swr";

import { useEffect, useRef } from "react";

import useErrorHandler from "../../services/ErrorHandler";
import API, { SWRHook } from "../API";

export default function useAPI<T>(key: Key): SWRHook<T> {
  const { data, error, mutate } = useSWR(key, API.get);
  const { setError } = useErrorHandler();
  const errorHandledRef = useRef(false);

  useEffect(() => {
    if (error && !errorHandledRef.current) {
      setError();
      errorHandledRef.current = true;
    }

    if (!error) {
      errorHandledRef.current = false;
    }
  }, [error, setError]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
}
