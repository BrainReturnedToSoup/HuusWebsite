import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../../state/react-redux/store";

function LastName({}) {
  const lastNameError: string = useSelector(
    (state: AppStoreRootState) => state.contactForm.lastNameError,
  );

  return (
    <div className="mb-10 flex flex-col">
      <div className="mb-1">
        <div className="mb-1">
          <label
            htmlFor="contact-form-last-name"
            className="default-font-bold text-base"
          >
            Last Name*
          </label>
        </div>
        {lastNameError && (
          <p className="default-font-regular-italic mb-1 flex w-fit text-pretty px-1 text-xs text-red-500">
            {lastNameError}
          </p>
        )}
      </div>
      <input
        id="contact-form-last-name"
        type="text"
        placeholder="Example: John Doe, Jane, etc."
        className={`default-font-bold border-[1px] ${lastNameError ? "border-red-500" : "border-transparent"} bg-neutral-100 px-2 py-2 text-base`}
      />
    </div>
  );
}

export { LastName };
