import useSWR, { Key } from "swr";

import { useEffect } from "react";

import useErrorHandler from "../../services/ErrorHandler";
import API, { SWRHook } from "../API";

export default function useAPI<T>(key: Key): SWRHook<T> {
  const { data, error, mutate } = useSWR(key, API.get);

  const { setError } = useErrorHandler();

  useEffect(() => {
    if (error) setError();
  }, [error, setError]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
}
