import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../components/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class ReadingAPI {
  public static useReadingLessons(): FetchHook & {
    readingLessonCategories: any;
  } {
    const { data, error } = useSWR(
      ["reading-lessons", "?group=category&sort=+learningOrder"],
      fetcher
    );
    const { setError } = useErrorHandler();

    useEffect(() => {
      if (error) setError();
    }, [error]);

    return {
      readingLessonCategories: data,
      isLoading: !error && !data,
    };
  }
}
