/*
    -Form field
*/
export type FirstName = string;
export type FirstNameError = string;

/*
    -Form field
*/
export type LastName = string;
export type LastNameError = string;

/*
    -Form field
*/
export type Email = string;
export type EmailError = string;

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
    -form general error, but could be extended beyond being a string
*/
export type GeneralFormError = string;

/*
    -form state flag for both form fields and submission button
*/
export type InputsDisabled = boolean;

/*
    -form state id for idempotent submissions across failed network calls
*/
export type SubmitId = string;
