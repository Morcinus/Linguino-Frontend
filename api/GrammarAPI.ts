import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../components/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class GrammarAPI {
  public static useGrammarDecks(): FetchHook & {
    grammarDeckCategories: any;
  } {
    const { data, error } = useSWR(
      ["grammar-decks", "?group=category&sort=+learningOrder"],
      fetcher
    );
    const { setError } = useErrorHandler();

    useEffect(() => {
      if (error) setError();
    }, [error]);

    return {
      grammarDeckCategories: data,
      isLoading: !error && !data,
    };
  }
}
