import useSWR from "swr";

import { useEffect } from "react";

import useErrorHandler from "../services/ErrorHandler";
import { FetchHook, fetcher } from "./API";

export default class DashboardAPI {
  public static useDailyLearnButton(): FetchHook {
    const { data, error } = useSWR(["dashboard/daily-learn-button"], fetcher);

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
