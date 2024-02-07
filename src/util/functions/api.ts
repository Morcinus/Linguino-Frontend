// eslint-disable-next-line @typescript-eslint/ban-types
export function parseQueryParams(params: Object): string {
  const arr = [];
  for (const [key, value] of Object.entries(params)) {
    arr.push(`${key}=${value}`);
  }

  return arr.join("&");
}
