import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { Options } from "@emailjs/browser/es/types/Options";

export type SendWithTimeout = (
  sendId: string,
  serviceID: string,
  templateID: string,
  templateParams?: Record<string, unknown>,
  options?: Options | string,
) => Promise<EmailJSResponseStatus>;

export type BindedSend = (sendId: string) => Promise<EmailJSResponseStatus>;

export type Logger = (event: string) => void;

function emailJS_createBindedSend(
  sendMethod: SendWithTimeout,
  logger: Logger | null,
  serviceID: string,
  templateID: string,
  templateParams?: Record<string, unknown>,
  options?: Options | string,
): BindedSend {
  return (sendID: string): Promise<EmailJSResponseStatus> => {
    if (logger) logger(`EmailJS "send" : binded send started : ${sendID}`);

    return sendMethod(sendID, serviceID, templateID, templateParams, options);
  };
}

function emailJS_createSendWithTimeout(
  sendMethod: typeof emailjs.send,
  logger: Logger | null,
  delayMs: number,
): SendWithTimeout {
  return (
    sendID: string,
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, unknown>,
    options?: Options | string,
  ) => {
    if (logger) logger(`EmailJS "send" : started : ${sendID}`);

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        if (logger)
          logger(`EmailJS "send" with timeout : timed out : ${sendID}`);

        reject(
          new Error(`EmailJS "send" with timeout : timed out : ${sendID}`),
        );
      }, delayMs);

      sendMethod(serviceID, templateID, templateParams, options)
        .then((res) => {
          if (logger)
            logger(`EmailJS "send" with timeout : "send" resolved : ${sendID}`);

          clearTimeout(timeout);

          resolve(res);
        })
        .catch((err) => {
          if (logger)
            logger(`EmailJS "send" with timeout : "send" rejected : ${sendID}`);

          clearTimeout(timeout);

          reject(err);
        });
    });
  };
}

// createSendWithTimeout --> createBindedSend
// you get a prebinded send with a timeout, which can then be
// traded for a mock wherever its used.

export { emailJS_createBindedSend, emailJS_createSendWithTimeout };
