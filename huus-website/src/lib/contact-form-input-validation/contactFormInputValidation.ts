// raw validators, rather than expecting a dependency context that exists within the 'contact-form'
// service module. Those functions utilize direct injection of the redux store and state to get
// the inputs, but this mechanism allows for input validation in the react component as well as in
// the 'contact-form' service.
function yourEmailValidator(input: string): boolean {}

function generalLocationValidator(input: string): boolean {}

function serviceSelectionValidator(input: string): boolean {}

function messageInputValidator(input: string): boolean {}

export {
  yourEmailValidator,
  generalLocationValidator,
  serviceSelectionValidator,
  messageInputValidator,
};
