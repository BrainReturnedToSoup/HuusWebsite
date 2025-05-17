import { EmailProps_Interface } from "./Email_Interface";

import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../state/react-redux/store";

export function Email({}: EmailProps_Interface) {
  const emailError: string = useSelector(
    (state: AppStoreRootState) => state.contactForm.emailError,
  );

  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1">
          <label
            htmlFor="contact-form-email"
            className="default-font-bold text-base"
          >
            Email*
          </label>
        </div>
        {emailError && (
          <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
            {emailError}
          </p>
        )}
      </div>
      <input
        id="contact-form-email"
        type="email"
        placeholder="Example: email@example.com"
        className={`default-font-bold border-[1px] ${emailError ? "border-red-500" : "border-transparent"} bg-neutral-100 px-2 py-2 text-base`}
      />
    </div>
  );
}
