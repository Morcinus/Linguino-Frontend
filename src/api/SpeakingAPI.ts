import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../app/components/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class SpeakingAPI {
  public static useSpeakingLessons(): FetchHook {
    const { data, error } = useSWR(
      ["speaking-lessons", "?group=category&sort=+learningOrder"],
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
