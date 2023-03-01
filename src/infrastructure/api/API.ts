import axios from "axios";
import { KeyedMutator } from "swr";

export const fetcher = (url: string, queryParams = "") =>
  axios.get(`${url}${queryParams}`).then((res) => res.data);

export function optimisticMutationOption<T>(data: T) {
  return {
    revalidate: false,
    optimisticData: data,
  };
}

export interface SWRHook<T> {
  data: T;
  isLoading: boolean;
  mutate: KeyedMutator<T>;
}

export interface FetchHook<T> {
  isLoading: boolean;
  mutate: KeyedMutator<T>;
}
