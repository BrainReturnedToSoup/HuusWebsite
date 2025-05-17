import { useSelector } from "react-redux";
import constraintViolationWarning from "../../../../../../../assets/images/warning-symbol.svg";
import { AppStoreRootState } from "../../../../../../../state/react-redux/store";

function FirstName({}) {
  const firstNameError: string = useSelector(
    (state: AppStoreRootState) => state.contactForm.firstNameError,
  );

  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1">
          <label
            htmlFor="contact-form-first-name"
            className="default-font-bold text-base"
          >
            First Name*
          </label>
        </div>
        {firstNameError && (
          <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
            {firstNameError}
          </p>
        )}
      </div>
      <input
        id="contact-form-first-name"
        type="text"
        placeholder="Example: John Doe, Jane, etc."
        className={`default-font-bold border-[1px] ${firstNameError ? "border-red-500" : "border-transparent"} bg-neutral-100 px-2 py-2 text-base`}
      />
    </div>
  );
}

export { FirstName };
