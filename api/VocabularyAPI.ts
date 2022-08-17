import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../components/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class VocabularyAPI {
  public static useVocabularyDecks(): FetchHook & {
    vocabularyDeckCategories: any;
  } {
    const { data, error } = useSWR(
      ["vocabulary-decks", "?group=category&sort=+learningOrder"],
      fetcher
    );
    const { setError } = useErrorHandler();

    useEffect(() => {
      if (error) setError();
    }, [error]);

    return {
      vocabularyDeckCategories: data,
      isLoading: !error && !data,
    };
  }
}
