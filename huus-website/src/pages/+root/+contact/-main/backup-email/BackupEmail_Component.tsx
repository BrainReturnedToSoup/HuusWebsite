import { BackupEmailProps_Interface } from "./BackupEmail_Interface";

export default function BackupEmail({ emailAddr }: BackupEmailProps_Interface) {
  return (
    <div className="mb-14 max-w-[760px] flex-col items-center justify-center text-pretty px-2 py-12 text-neutral-600">
      <p className="lato-medium mb-6 text-center text-sm italic last:flex md:mb-3">
        <span className="lato-bold italic underline">
          If the contact form doesn't work
        </span>
        , send an email to the following address instead. Use the contact form
        to fill out your information, then click on the email link and submit
        manually. The form contents will transfer automatically.
      </p>
      <a
        href={`mailto:${emailAddr}?subject=example%20subject&body=example%20body`}
        className="lato-medium flex items-center justify-center text-xl hover:underline"
      >
        {emailAddr}
      </a>
    </div>
  );
}
