// import { RootState } from "../../state/store";
// import { useSelector } from "react-redux";

function LearnMoreLink() {
  return (
    <a className="flex text-white lg:text-xl" href="/about ">
      Learn More{" "}
      <img className="ml-1 text-white lg:text-xl" alt="redirect icon"></img>
    </a>
  );
}

export default function Hero() {
  return (
    <div className="bg-red my-12 mt-14 flex h-full lg:px-14 xl:px-20">
      <div className="mt-5 flex h-3/4 flex-col justify-center bg-black bg-opacity-30 p-3 py-6 transition-colors duration-300 ease-in-out sm:h-3/5 md:h-4/5 lg:w-[700px] xl:bg-transparent">
        <div className="bg-opacity-15 p-3 pl-10">
          <h2 className="mb-4 text-5xl font-light text-white md:text-7xl">
            No fads.
          </h2>
          <h1 className="mb-6 text-5xl font-light text-white md:text-7xl">
            No gimmicks.
          </h1>
          <h3 className="mt-8 text-5xl text-white md:text-7xl">Just science</h3>
        </div>
        <div className="bg-opacity-10 bg-opacity-15 p-3 pl-10">
          <p className="mb-3 text-white md:mb-5 md:text-xl">
            Quality personal training and fitness consultation right at your
            fingertips. Schedule your online or in-person appointment today.
          </p>
          <LearnMoreLink />
        </div>
      </div>
    </div>
  );
}
