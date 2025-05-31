import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../../state/react-redux/store";
import { useDispatch } from "react-redux";
import { contactFormSliceActions } from "../../../../../../../state/react-redux/slices/contact-form/contactForm";
import {
  LastName as LastName_Type,
  LastNameError,
} from "../../../../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

function LastName({}) {
  const lastNameError: LastNameError = useSelector(
    (state: AppStoreRootState) => state.contactForm.lastNameError,
  );

  const lastName: LastName_Type = useSelector(
    (state: AppStoreRootState) => state.contactForm.lastName,
  );

  const dispatch = useDispatch();

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
        value={lastName}
        onChange={(e) => {
          dispatch(contactFormSliceActions.setLastName(e.target.value));
        }}
      />
    </div>
  );
}

export { LastName };
