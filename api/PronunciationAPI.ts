import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../components/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class PronunciationAPI {
  public static usePronunciationLessons(): FetchHook & {
    pronunciationLessonCategories: any;
  } {
    const { data, error } = useSWR(
      ["pronunciation-lessons", "?group=category&sort=+learningOrder"],
      fetcher
    );
    const { setError } = useErrorHandler();

    useEffect(() => {
      if (error) setError();
    }, [error]);

    return {
      pronunciationLessonCategories: data,
      isLoading: !error && !data,
    };
  }
}
