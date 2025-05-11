import { MessageProps_Interface } from "./Message_Interface";

export function Message({}: MessageProps_Interface) {
  return (
    <div className="mb-10 flex flex-col">
      <label
        htmlFor="contact-form-message"
        className="default-font-bold mb-1 text-base"
      >
        Message*
      </label>
      <textarea
        id="contact-form-message"
        placeholder="Example: 'Hello, I was looking to inquire on the service [service]...' 'I have a question about [example]...' 'Do you offer [example]?'"
        className="default-font-bold min-h-[275px] bg-neutral-100 px-2 py-2 text-base"
      />
    </div>
  );
}
