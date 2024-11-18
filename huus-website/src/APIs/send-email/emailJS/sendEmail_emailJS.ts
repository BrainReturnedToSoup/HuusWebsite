import { SendEmailAPIInterface } from "../sendEmailInterface";

import emailJs from "@emailjs/browser";

type EmailJS = typeof emailJs;

export type EmailJSOptions = {
  // add the specifc args here
};

class SendEmail_EmailJS implements SendEmailAPIInterface<EmailJSOptions, void> {
  #emailJs: EmailJS;

  constructor(emailJs: EmailJS) {
    this.#emailJs = emailJs;
  }

  sendWithTimeout(args: EmailJSOptions, timeoutMs: number): Promise<void> {
    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly
      // and also it makes it easier to make a setTimeout closure.
    });
  }

  send(args: EmailJSOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      // return a promise instead, so that the working apps aren't worrying about email JS concerns directly
    });
  }
}

const singletonForAppUse = new SendEmail_EmailJS(emailJs);

const sendEmail_emailJs = singletonForAppUse;

export { SendEmail_EmailJS, sendEmail_emailJs };
