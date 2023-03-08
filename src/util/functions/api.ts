import { Params } from "domain/models/types/api";

export function parseQueryParams(params: Params): string {
  const arr = [];
  for (const [key, value] of Object.entries(params)) {
    arr.push(`${key}=${value}`);
  }

  return arr.join("&");
}
