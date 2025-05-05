import { CallToAction as DefaultCallToAction } from "../../../../components/util/call-to-action/CallToAction_Component";

const TITLE = `Like what you see? Let's talk!`;

const DESC = `Random description here Random description here Random description
    here Random description here Random description here Random
    description here Random description here Random description here
    Random description here Random description here`;

const REDIRECT_BUTTON_TEXT = `Contact me`;

function CallToAction() {
  return (
    <DefaultCallToAction
      title={TITLE}
      desc={DESC}
      redirectButtonText={REDIRECT_BUTTON_TEXT}
      redirectCallback={() => {}}
    />
  );
}

export { CallToAction, TITLE, DESC, REDIRECT_BUTTON_TEXT };
