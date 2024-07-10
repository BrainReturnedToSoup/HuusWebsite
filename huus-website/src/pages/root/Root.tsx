import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import Nav from "./Nav";
import Hero from "./Hero";

export default function Root() {
  const screenPosition: number = useSelector(
    (state: RootState) => state.deviceScreen.position,
  );

  return (
    <>
      <header className="flex flex-col main-backdrop-image h-dvh w-full bg-black">
        <div
          className={`h-18 fixed flex w-full justify-between justify-items-center px-6 sm:h-14 sm:px-10 lg:px-14 xl:px-20 ${screenPosition > window.innerHeight - 25 ? "bg-white" : "bg-black bg-opacity-35"}`}
        >
          <div className="flex justify-items-center">
            <img
              className={`justify-self-center ${screenPosition > window.innerHeight ? "text-transparent" : "text-white"}`}
              alt="site logo"
            >
            </img>
          </div>
          <Nav />
        </div>
        <Hero />
      </header>
      <main className="h-[2000px] bg-white px-6 md:px-10 lg:px-14 xl:px-20"></main>
      <footer className="px-6 sm:px-10 lg:px-14 xl:px-20"></footer>
    </>
  );
}
