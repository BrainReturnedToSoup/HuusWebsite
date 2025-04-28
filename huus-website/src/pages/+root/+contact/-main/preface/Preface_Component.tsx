import DefaultPreface from "../../../../../components/util/preface/DefaultPreface";

const title = "Interested? Send me a message!";

const desc = `See a service you like? Or perhaps you have a question? Feel free to send me a message using the form below! The more details you have in your message, the better I can help you.`;

export default function Preface() {
  return (
    <div>
      <DefaultPreface title={title} desc={desc} />
    </div>
  );
}
