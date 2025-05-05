import { CallToAction as DefaultCallToAction } from "../../../../../components/util/call-to-action/CallToAction_Component";

const TITLE = `Not finding what you are looking for?`;

const DESC = `Feel free to reach out, free of charge,
    if you are unsure about your specific needs or perhaps
    have unique constraints.`;

const REDIRECT_BUTTON_TEXT = `Contact me`;

function CallToAction() {
  return (
    <DefaultCallToAction
      title={TITLE}
      desc={DESC}
      redirectCallback={() => {}}
      redirectButtonText={REDIRECT_BUTTON_TEXT}
    />
  );
}

export { CallToAction, TITLE, DESC, REDIRECT_BUTTON_TEXT };
