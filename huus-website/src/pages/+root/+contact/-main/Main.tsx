import Preface from "./preface/Preface";
import ContactForm from "./contact-form/ContactForm";
import BackupEmail from "./backup-email/BackupEmail";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center">
        <Preface />
        <ContactForm />
        <BackupEmail />
    </main>
  );
}
