import axios from "axios";
import { KeyedMutator } from "swr";

export const fetcher = (url: string, queryParams = "") =>
  axios.get(`${url}${queryParams}`).then((res) => res.data);

export const optimisticMutationOption = (data: any) => {
  return {
    revalidate: false,
    optimisticData: data,
  };
};

export interface SWRHook {
  data: any;
  isLoading: boolean;
  mutate: KeyedMutator<any>;
}

export interface FetchHook {
  isLoading: boolean;
  mutate: KeyedMutator<any>;
}

export interface MutationHook {
  trigger: any;
  isValidating: boolean;
}
