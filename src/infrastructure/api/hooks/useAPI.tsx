import useSWR, { Key } from "swr";

import { useEffect } from "react";

import useErrorHandler from "../../services/ErrorHandler";
import { FetchHook, fetcher } from "../API";

export default function useAPI(props: Key): FetchHook {
  const { data, error } = useSWR(props, fetcher);

  const { setError } = useErrorHandler();

  useEffect(() => {
    if (error) setError();
  }, [error]);

  return {
    data: data,
    isLoading: !error && !data,
  };
}
