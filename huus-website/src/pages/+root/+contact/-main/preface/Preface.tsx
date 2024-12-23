import DefaultPreface from "../../../../../components/common/preface/DefaultPreface";

const title = "Send me an email!";

const desc = `See a service you like? Or perhaps you have a question? Feel free to send me an email using the form below! The more details you have in your message, the better I can help you.`;

export default function Preface() {
  return (
    <div>
      <DefaultPreface title={title} desc={desc} />
    </div>
  );
}
