import emailJs from "@emailjs/browser";

import { SendEmail_EmailJsImpl } from "./SendEmail_Impl";

import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";

import { EmailJsConfig_Enum } from "./SendEmail_Enum";

emailJs.init({
  publicKey: EmailJsConfig_Enum.PUBLIC_KEY,
});

const sendEmail_EmailJs = new SendEmail_EmailJsImpl(emailJs, defaultLogger);

export { sendEmail_EmailJs };
