import DefaultPreface from "../../../../../components/util/preface/DefaultPreface";

const TITLE = "Interested? Send me a message!";

const DESC = `See a service you like? Or perhaps you have a question? Feel free to send me a message using the form below! The more details you have in your message, the better I can help you.`;

function Preface() {
  return (
    <div>
      <DefaultPreface title={TITLE} desc={DESC} />
    </div>
  );
}

export { Preface, TITLE, DESC };
