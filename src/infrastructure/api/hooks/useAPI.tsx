import useSWR, { Key } from "swr";

import { useEffect } from "react";

import useErrorHandler from "../../services/ErrorHandler";
import { SWRHook, fetcher } from "../API";

export default function useAPI<T>(key: Key): SWRHook<T> {
  const { data, error, mutate } = useSWR(key, fetcher);

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
