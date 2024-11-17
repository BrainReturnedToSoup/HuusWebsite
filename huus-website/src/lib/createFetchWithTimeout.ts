class FetchTimedOutError extends Error {}

export type FetchWithTimeout = (
  uri: RequestInfo | URL,
  options: RequestInit,
  fetchId: string,
) => Promise<Response>;

export type Logger = (event: string) => void;

export default function createFetchWithTimeout(
  fetchFunc: typeof fetch,
  delayMs: number,
  logger: Logger | null | undefined,
): FetchWithTimeout {
  return (uri: RequestInfo | URL, options: RequestInit, fetchId: string) => {
    if (logger) logger(`Fetch with timeout : started : ${fetchId}`);

    return new Promise((resolve, reject) => {
      const timeout: number = setTimeout(() => {
        if (logger) logger(`Fetch with timeout : timed out : ${fetchId}`);

        reject(new FetchTimedOutError());
      }, delayMs);

      fetchFunc(uri, options)
        .then((res) => {
          if (logger)
            logger(`Fetch with timeout : fetch resolved : ${fetchId}`);

          clearTimeout(timeout);

          resolve(res);
        })
        .catch((err) => {
          if (logger)
            logger(`Fetch with timeout : fetch rejected : ${fetchId}`);

          clearTimeout(timeout);

          reject(err);
        });
    });
  };
}
