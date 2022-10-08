import axios from "axios";
import useSWRMutation from "swr/mutation";

async function sendRequest(url: string, { arg }: any) {
  return axios.post(url, arg);
}

export default function useMutation(url: string): any {
  const { trigger } = useSWRMutation(url, sendRequest);

  return {
    trigger,
  };
}
