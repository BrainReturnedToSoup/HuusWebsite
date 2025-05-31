import { Options as EmailJsOptions } from "@emailjs/browser/es/types/Options";
import emailJs from "@emailjs/browser";

import { EmailSendResponse, SendEmail_Interface } from "../SendEmail_Interface";
import { EmailJsRequestTimedOutError } from "./_errors/emailJsRequestTimeout";

import { Logger_Interface } from "../../../logging/logger/Logger_Interface";

type EmailJs_Interface = typeof emailJs;

export type EmailJsArgs = {
  serviceID: string;
  templateID: string;
  templateParams: Record<string, unknown>;
  options: EmailJsOptions;
};

class SendEmail_EmailJsImpl implements SendEmail_Interface<EmailJsArgs> {
  #emailJs: EmailJs_Interface;
  #logger: Logger_Interface;

  constructor(emailJs: EmailJs_Interface, logger: Logger_Interface) {
    this.#emailJs = emailJs;
    this.#logger = logger;

    this.#logger
  }

  sendWithTimeout(
    args: EmailJsArgs,
    timeoutMs: number,
    instantiationId: string,
    submitId: string,
  ): Promise<EmailSendResponse> {
    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly
      // and also it makes it easier to make a setTimeout closure.

      const timeout = setTimeout(() => {
        const message = `SendEmail_EmailJs:sendWithTimeout
        :instantiationId=${instantiationId}:submitId=${submitId}:timed out after ${timeoutMs}ms`;

        // if (this.#logger) this.#logger(message);

        reject(new EmailJsRequestTimedOutError(message));
      }, timeoutMs);

      // const started = new Date();

      // if (this.#logger)
      //   this.#logger(
      //     `SendEmail_EmailJs:sendWithTimeout
      //     :instantiationId=${instantiationId}:submitId=${submitId}:started at ${started}`,
      //   );

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

            // const ended = new Date();

            // if (this.#logger)
            //   this.#logger(
            //     `SendEmail_EmailJs:sendWithTimeout:instantiationId=${instantiationId}:submitId=${submitId}
            //     :request complete in ${ended.getMilliseconds() - started.getMilliseconds()}ms
            //     :status=${res.status}:message=${res.text}`,
            //   );

            resolve({ status: res.status, message: res.text });
          },
          (error) => {
            clearTimeout(timeout); // want to clear before outer promise resolution

            // const ended = new Date();

            // if (this.#logger)
            //   this.#logger(
            //     `SendEmail_EmailJs:sendWithTimeout:instantiationId=${instantiationId}:submitId=${submitId}
            //     :request failed in ${ended.getMilliseconds() - started.getMilliseconds()}ms`,
            //   );

            reject(error);
          },
        );
    });
  }

  send(
    args: EmailJsArgs,
    instantiationId: string,
    submitId: string,
  ): Promise<EmailSendResponse> {
    instantiationId;
    submitId;

    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly

      // const started = new Date();

      // if (this.#logger)
      //   this.#logger(
      //     `SendEmail_EmailJs:send:instantiationId=${instantiationId}:submitId=${submitId}:started at ${started}`,
      //   );

      this.#emailJs
        .send(
          args.serviceID,
          args.templateID,
          args.templateParams,
          args.options,
        )
        .then(
          (res) => {
            // const ended = new Date();

            // if (this.#logger)
            //   this.#logger(
            //     `SendEmail_EmailJs:send:instantiationId=${instantiationId}:submitId=${submitId}
            //     :request complete in ${ended.getMilliseconds() - started.getMilliseconds()}ms
            //     :status=${res.status}:message=${res.text}`,
            //   );

            resolve({ status: res.status, message: res.text });
          },
          (error) => {
            // const ended = new Date();

            // if (this.#logger)
            //   this.#logger(
            //     `SendEmail_EmailJs:send:instantiationId=${instantiationId}:submitId=${submitId}
            //     :request failed in ${ended.getMilliseconds() - started.getMilliseconds()}`,
            //   );

            reject(error);
          },
        );
    });
  }
}

export { SendEmail_EmailJsImpl };
