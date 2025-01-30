import Preface from "./preface/Preface";
import Features from "./features/Features";
import CallToAction from "./call-to-action/CallToAction";

export default function Main() {
  return (
    <main className="" style={{ position: "inherit" }}>
      <div className="flex flex-col items-center py-4">
        <Preface />
        <Features />
      </div>
      <CallToAction />
    </main>
  );
}
