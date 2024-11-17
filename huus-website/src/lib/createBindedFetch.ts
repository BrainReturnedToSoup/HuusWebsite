import { FetchWithTimeout } from "./createFetchWithTimeout";

export type BindedFetchLambda = (fetchId: string) => Promise<Response>;

export type Logger = (event: string) => void;

export default function createBindedFetchWithTimeout(
  uri: RequestInfo | URL,
  options: RequestInit,
  fetchWithTimeout: typeof fetch | FetchWithTimeout,
  logger: Logger | null,
): BindedFetchLambda {
  return (fetchId: string): Promise<Response> => {
    if (logger) logger(`Binded fetch : started : ${fetchId}`);

    // this works because if its just a regular fetch, fetchId
    // doesn't pass to anything. Only two args exist on base fetch.
    return fetchWithTimeout(uri, options, fetchId);
  };
}
