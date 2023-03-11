import axios from "axios";
import { KeyedMutator } from "swr";

const API = {
  get: (url: string, queryParams = "") =>
    axios.get(`${url}${queryParams}`).then((res) => res.data),

  post(url: string, object: unknown) {
    return axios
      .post(url, object)
      .then((res) => res.data)
      .catch((res) => {
        throw res?.response?.data?.error;
      });
  },

  put(url: string, object: unknown) {
    return axios
      .put(url, object)
      .then((res) => res.data)
      .catch((res) => {
        throw res?.response?.data?.error;
      });
  },

  delete(url: string) {
    return axios
      .delete(url)
      .then((res) => res.data)
      .catch((res) => {
        throw res?.response?.data?.error;
      });
  },
};

export function optimisticMutationOption<T>(data: T) {
  return {
    revalidate: false,
    optimisticData: data,
    rollbackOnError: true,
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

export default API;
