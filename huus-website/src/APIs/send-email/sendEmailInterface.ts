export interface SendEmailAPIInterface<A, P> {
  sendWithTimeout(args: A, timeoutMs: number): Promise<P>;
  send(args: A): Promise<P>;
}
