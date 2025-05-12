import { MessageProps_Interface } from "./Message_Interface";

import constraintViolationWarning from "../../../../../../assets/images/warning-symbol.svg";

export function Message({}: MessageProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1 mr-3 flex">
          <label
            htmlFor="contact-form-message"
            className="default-font-bold mr-1 text-base"
          >
            Message*
          </label>
          <img
            src={constraintViolationWarning}
            alt="Message Constraint Violation Warning"
            className="aspect-square max-w-[20px]"
          />
        </div>
        <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
          Example Message Example Message Example Message Example Message
          Example Message Example Message Example
        </p>
      </div>
      <textarea
        id="contact-form-message"
        placeholder="Example: 'Hello, I was looking to inquire on the service [service]...' 'I have a question about [example]...' 'Do you offer [example]?'"
        className="default-font-bold min-h-[275px] border-[1px] border-red-500 bg-neutral-100 px-2 py-2 text-base"
      />
    </div>
  );
}
