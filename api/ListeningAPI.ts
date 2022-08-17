import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../components/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class ListeningAPI {
  public static useListeningLessons(): FetchHook & {
    listeningLessonCategories: any;
  } {
    const { data, error } = useSWR(
      ["listening-lessons", "?group=category&sort=+learningOrder"],
      fetcher
    );
    const { setError } = useErrorHandler();

    useEffect(() => {
      if (error) setError();
    }, [error]);

    return {
      listeningLessonCategories: data,
      isLoading: !error && !data,
    };
  }
}
