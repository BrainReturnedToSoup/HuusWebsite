export interface SendEmailAPIInterface<A, P> {
  sendWithTimeout(args: A, timeoutMs: number, submitId: string): Promise<P>;
  send(args: A, submitId: string): Promise<P>;
}
