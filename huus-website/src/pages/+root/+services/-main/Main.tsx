import Preface from "./Preface";
import Services from "./Services";

export default function Main() {
  return (
    <main className="flex items-center justify-center px-4 py-4 md:py-14">
      <div className="max-w-[875px] grow px-4 py-14">
        <Preface />
        <Services />
      </div>
    </main>
  );
}
