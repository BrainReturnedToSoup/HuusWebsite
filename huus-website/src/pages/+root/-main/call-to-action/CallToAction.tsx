import DefaultCallToAction from "../../../../components/util/call-to-action/DefaultCallToAction";

const title = `Like what you see? Let's talk!`;

const desc = `Random description here Random description here Random description
    here Random description here Random description here Random
    description here Random description here Random description here
    Random description here Random description here`;

const redirectButtonText = `Contact me`;

export default function CallToAction() {
  return (
    <DefaultCallToAction
      title={title}
      desc={desc}
      redirectCallback={() => {}}
      redirectButtonText={redirectButtonText}
    />
  );
}
