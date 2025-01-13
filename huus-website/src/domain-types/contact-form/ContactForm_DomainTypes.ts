/*
    -Form field
*/
export type FirstName = string;

/*
    -Form field
*/
export type LastName = string;

/*
    -Form field
*/
export type Email = string;
export type EmailError = string;

/*
    -Form field
*/
export type GeneralLocation = string;
export type GeneralLocationError = string;

/*
    -Form field
*/
export type ServiceSelection = string;
export type ServiceSelectionError = string;

/*
    -Form field
*/
export type Message = string;
export type MessageError = string;

/*
    -form state flag
*/
export type SubmitIsPending = boolean;

/*
    -form state flag
*/
export type SubmitSucceeded = boolean;

/*
    -form general error message box
*/
export type FormErrorMessage = string;

/*
    -form state flag for both form fields and submission button
*/
export type InputsDisabled = boolean;

/*
    -form state id for idempotent submissions across failed network calls
*/
export type SubmitId = string;
