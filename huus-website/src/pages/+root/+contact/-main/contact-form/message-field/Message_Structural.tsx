import { MessageProps_Interface } from "./Message_Interface";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../state/react-redux/store";
import { contactFormSliceActions } from "../../../../../../state/react-redux/slices/contact-form/contactForm";
import {
  Message as Message_Type,
  MessageError,
} from "../../../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

export function Message({}: MessageProps_Interface) {
  const messageError: MessageError = useSelector(
    (state: AppStoreRootState) => state.contactForm.messageError,
  );

  const message: Message_Type = useSelector(
    (state: AppStoreRootState) => state.contactForm.message,
  );

  const dispatch = useDispatch();

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
        value={message}
        onChange={(e) =>
          dispatch(contactFormSliceActions.setMessage(e.target.value))
        }
      />
    </div>
  );
}
