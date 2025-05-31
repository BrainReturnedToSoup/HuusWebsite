import { useSelector } from "react-redux";
import { AppStoreRootState } from "../../../../../../../state/react-redux/store";
import { useDispatch } from "react-redux";
import { contactFormSliceActions } from "../../../../../../../state/react-redux/slices/contact-form/contactForm";
import {
  FirstName as FirstName_Type,
  FirstNameError,
} from "../../../../../../../domain-data-types/contact-form/ContactForm_DomainTypes";

function FirstName({}) {
  const firstNameError: FirstNameError = useSelector(
    (state: AppStoreRootState) => state.contactForm.firstNameError,
  );

  const firstName: FirstName_Type = useSelector(
    (state: AppStoreRootState) => state.contactForm.firstName,
  );

  const dispatch = useDispatch();

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
        value={firstName}
        className={`default-font-bold border-[1px] ${firstNameError ? "border-red-500" : "border-transparent"} bg-neutral-100 px-2 py-2 text-base`}
        onChange={(e) =>
          dispatch(contactFormSliceActions.setFirstName(e.target.value))
        }
      />
    </div>
  );
}

export { FirstName };
