import DefaultCallToAction from "../../../../../components/default/call-to-action/DefaultCallToAction";

const title = `Not finding what you are looking for?`;

const desc = `Feel free to reach out, free of charge,
    if you are unsure about your specific needs or perhaps
    have unique constraints.`;

const redirectButtonText = `Contact me`;

export default function CallToAction() {
  return (
    <>
      <DefaultCallToAction
        title={title}
        desc={desc}
        redirectCallback={() => {}}
        redirectButtonText={redirectButtonText}
      />
    </>
  );
}
