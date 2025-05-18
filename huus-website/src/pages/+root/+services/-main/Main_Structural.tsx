import { Preface } from "./preface/Preface_Structural";
import { ServiceOfferings } from "./service-offerings/ServiceOfferings_Structural";
import { CallToAction } from "./call-to-action/CallToAction_Structural";

function Main() {
  return (
    <main className="flex items-center justify-center px-4 py-4 md:py-14">
      <div className="max-w-[875px] grow px-4 py-14">
        <Preface />
        <ServiceOfferings />
        <CallToAction />
      </div>
    </main>
  );
}

export { Main };
