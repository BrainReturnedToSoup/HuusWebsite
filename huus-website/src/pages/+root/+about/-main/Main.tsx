import Summary from "./summary/Summary";
import Selfie from "./selfie/Selfie";
import Details from "./details/Details";

export default function Main() {
  return (
    <main className="flex items-center justify-center px-4 py-4 md:py-14">
      <div className="max-w-[875px] grow px-4 py-14">
        <div className="flex flex-col items-center justify-center border-b-[1px] border-neutral-400 px-2 py-4 pb-14 md:flex-row">
          {
            // supplying empty methods as props, simply because as of now there isn't a need for fallback rendering as it happens naturally now.
            // However, still keeping the option open for such if necessary in the future.
          }
          <Selfie />

          <Summary />
        </div>
        <Details />
      </div>
    </main>
  );
}
