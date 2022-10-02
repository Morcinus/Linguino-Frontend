import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../app/components/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class GrammarAPI {
  public static useGrammarLessons(): FetchHook {
    const { data, error } = useSWR(
      ["grammar-lessons", "?group=category&sort=+learningOrder"],
      fetcher
    );
    const { setError } = useErrorHandler();

    useEffect(() => {
      if (error) setError();
    }, [error]);

    return {
      data: data,
      isLoading: !error && !data,
    };
  }
}
