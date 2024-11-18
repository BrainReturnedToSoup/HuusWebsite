import { Options as EmailJSOptions } from "@emailjs/browser/es/types/Options";
import emailJs from "@emailjs/browser";

import { SendEmailAPIInterface } from "../sendEmailInterface";
import { EmailJsRequestTimedOutError } from "./errors/emailJsRequestTimeout";

emailJs.init({
  publicKey: "l4CUCpWmX95rBeGgX",
});

type EmailJs = typeof emailJs;

export type EmailJsSend = {
  serviceID: string;
  templateID: string;
  templateParams: Record<string, unknown>;
  options: EmailJSOptions;
};

export type EmailJsResponse = { status: number; message: string };

export type Logger = (message: string) => unknown;

class SendEmail_EmailJs
  implements SendEmailAPIInterface<EmailJsSend, EmailJsResponse>
{
  #emailJs: EmailJs;
  #logger: Logger | null;

  constructor(emailJs: EmailJs, logger: Logger | null) {
    this.#emailJs = emailJs;
    this.#logger = logger;
  }

  sendWithTimeout(
    args: EmailJsSend,
    timeoutMs: number,
    submitId: string,
  ): Promise<EmailJsResponse> {
    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly
      // and also it makes it easier to make a setTimeout closure.

      const timeout = setTimeout(() => {
        const message = `SendEmail_EmailJs:sendWithTimeout:submitId=${submitId}:timed out after ${timeoutMs}ms`;

        if (this.#logger) this.#logger(message);

        reject(new EmailJsRequestTimedOutError(message));
      }, timeoutMs);

      const started = new Date();

      if (this.#logger)
        this.#logger(
          `SendEmail_EmailJs:sendWithTimeout:submitId=${submitId}:started at ${started}`,
        );

      this.#emailJs
        .send(
          args.serviceID,
          args.templateID,
          args.templateParams,
          args.options,
        )
        .then(
          (res) => {
            clearTimeout(timeout); // want to clear before outer promise resolution

            const ended = new Date();

            if (this.#logger)
              this.#logger(
                `SendEmail_EmailJs:sendWithTimeout:submitId=${submitId}
                :request complete in ${ended.getMilliseconds() - started.getMilliseconds()}ms
                :status=${res.status}:message=${res.text}`,
              );

            resolve({ status: res.status, message: res.text });
          },
          (error) => {
            clearTimeout(timeout); // want to clear before outer promise resolution

            const ended = new Date();

            if (this.#logger)
              this.#logger(
                `SendEmail_EmailJs:sendWithTimeout:submitId=${submitId}:request failed in ${ended.getMilliseconds() - started.getMilliseconds()}ms`,
              );

            reject(error);
          },
        );
    });
  }

  send(args: EmailJsSend, submitId: string): Promise<EmailJsResponse> {
    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly

      const started = new Date();

      if (this.#logger)
        this.#logger(
          `SendEmail_EmailJs:send:submitId=${submitId}:started at ${started}`,
        );

      this.#emailJs
        .send(
          args.serviceID,
          args.templateID,
          args.templateParams,
          args.options,
        )
        .then(
          (res) => {
            const ended = new Date();

            if (this.#logger)
              this.#logger(
                `SendEmail_EmailJs:send:submitId=${submitId}
                :request complete in ${ended.getMilliseconds() - started.getMilliseconds()}ms
                :status=${res.status}:message=${res.text}`,
              );

            resolve({ status: res.status, message: res.text });
          },
          (error) => {
            const ended = new Date();

            if (this.#logger)
              this.#logger(
                `SendEmail_EmailJs:send:submitId=${submitId}:request failed in ${ended.getMilliseconds() - started.getMilliseconds()}`,
              );

            reject(error);
          },
        );
    });
  }
}

const singletonForAppUse = new SendEmail_EmailJs(emailJs, null);

const sendEmail_emailJs = singletonForAppUse;

export { SendEmail_EmailJs, sendEmail_emailJs };
