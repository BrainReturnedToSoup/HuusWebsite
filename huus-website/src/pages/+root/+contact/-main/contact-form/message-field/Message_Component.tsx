import { MessageProps_Interface } from "./Message_Interface";

export function Message({}: MessageProps_Interface) {
  return (
    <div className="mb-6 flex flex-col">
      <label htmlFor="contact-form-message" className="lato-bold mb-2 text-sm">
        *Message
      </label>
      <textarea
        id="contact-form-message"
        placeholder="Example: 'Hello, I was looking to inquire on the service [service]...' 'I have a question about [example]...' 'Do you offer [example]?'"
        className="min-h-[275px] bg-neutral-100 px-2 py-3 text-xl"
      />
    </div>
  );
}
