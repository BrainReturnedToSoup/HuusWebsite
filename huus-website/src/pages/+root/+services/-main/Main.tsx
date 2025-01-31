import Preface from "./preface/Preface";
import ServicesList from "./services-list/ServicesList";
import CallToAction from "./call-to-action/CallToAction";

export default function Main() {
  return (
    <main className="flex items-center justify-center px-4 py-4 md:py-14">
      <div className="max-w-[875px] grow px-4 py-14">
        <Preface />
        <ServicesList />
        <CallToAction />
      </div>
    </main>
  );
}
