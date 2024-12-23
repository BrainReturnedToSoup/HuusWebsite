import { Options as EmailJSOptions } from "@emailjs/browser/es/types/Options";
import emailJs from "@emailjs/browser";

import { EmailSendReturn, SendEmailAPIInterface } from "../sendEmailInterface";
import { EmailJsRequestTimedOutError } from "./_errors/emailJsRequestTimeout";

import { EmailJsConfig_Enum } from "./Config_Enum";

emailJs.init({
  publicKey: EmailJsConfig_Enum.PUBLIC_KEY,
});

type EmailJs = typeof emailJs;

export type EmailJsArgs = {
  serviceID: string;
  templateID: string;
  templateParams: Record<string, unknown>;
  options: EmailJSOptions;
};

export type Logger = (message: string) => void;

class SendEmail_EmailJs implements SendEmailAPIInterface<EmailJsArgs> {
  #emailJs: EmailJs;
  #logger: Logger | null;

  constructor(emailJs: EmailJs, logger: Logger | null) {
    this.#emailJs = emailJs;
    this.#logger = logger;
  }

  sendWithTimeout(
    args: EmailJsArgs,
    timeoutMs: number,
    instantiationId: string,
    submitId: string,
  ): Promise<EmailSendReturn> {
    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly
      // and also it makes it easier to make a setTimeout closure.

      const timeout = setTimeout(() => {
        const message = `SendEmail_EmailJs:sendWithTimeout
        :instantiationId=${instantiationId}:submitId=${submitId}:timed out after ${timeoutMs}ms`;

        if (this.#logger) this.#logger(message);

        reject(new EmailJsRequestTimedOutError(message));
      }, timeoutMs);

      const started = new Date();

      if (this.#logger)
        this.#logger(
          `SendEmail_EmailJs:sendWithTimeout
          :instantiationId=${instantiationId}:submitId=${submitId}:started at ${started}`,
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
                `SendEmail_EmailJs:sendWithTimeout:instantiationId=${instantiationId}:submitId=${submitId}
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
                `SendEmail_EmailJs:sendWithTimeout:instantiationId=${instantiationId}:submitId=${submitId}
                :request failed in ${ended.getMilliseconds() - started.getMilliseconds()}ms`,
              );

            reject(error);
          },
        );
    });
  }

  send(
    args: EmailJsArgs,
    instantiationId: string,
    submitId: string,
  ): Promise<EmailSendReturn> {
    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly

      const started = new Date();

      if (this.#logger)
        this.#logger(
          `SendEmail_EmailJs:send:instantiationId=${instantiationId}:submitId=${submitId}:started at ${started}`,
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
                `SendEmail_EmailJs:send:instantiationId=${instantiationId}:submitId=${submitId}
                :request complete in ${ended.getMilliseconds() - started.getMilliseconds()}ms
                :status=${res.status}:message=${res.text}`,
              );

            resolve({ status: res.status, message: res.text });
          },
          (error) => {
            const ended = new Date();

            if (this.#logger)
              this.#logger(
                `SendEmail_EmailJs:send:instantiationId=${instantiationId}:submitId=${submitId}
                :request failed in ${ended.getMilliseconds() - started.getMilliseconds()}`,
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
