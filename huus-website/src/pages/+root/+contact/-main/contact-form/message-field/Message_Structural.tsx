import { MessageProps_Interface } from "./Message_Interface";

import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../state/react-redux/store";

export function Message({}: MessageProps_Interface) {
  const messageError: string = useSelector(
    (state: AppStoreRootState) => state.contactForm.messageError,
  );

  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1">
          <label
            htmlFor="contact-form-message"
            className="default-font-bold text-base"
          >
            Message*
          </label>
        </div>
        {messageError && (
          <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
            {messageError}
          </p>
        )}
      </div>
      <textarea
        id="contact-form-message"
        placeholder="Example: 'Hello, I was looking to inquire on the service [service]...' 'I have a question about [example]...' 'Do you offer [example]?'"
        className={`default-font-bold min-h-[275px] border-[1px] ${messageError ? "border-red-500" : "border-transparent"} bg-neutral-100 px-2 py-2 text-base`}
      />
    </div>
  );
}
