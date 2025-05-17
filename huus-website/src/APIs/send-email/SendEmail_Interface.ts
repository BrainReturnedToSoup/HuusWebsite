export type EmailSendResponse = { status: string | number; message: string };

export interface SendEmail_Interface<A> {
  sendWithTimeout(
    args: A,
    timeoutMs: number,
    instantiationId: string,
    submitId: string,
  ): Promise<EmailSendResponse>;

  send(
    args: A,
    instantiationId: string,
    submitId: string,
  ): Promise<EmailSendResponse>;
}
