import axios from "axios";

export const fetcher = (url: string, queryParams = "") =>
  axios.get(`${url}${queryParams}`).then((res) => res.data);

export interface FetchHook {
  isLoading: boolean;
}
