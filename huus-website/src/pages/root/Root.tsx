import Nav from "./Nav";
import Hero from "./Hero";

import "./Root.css"

export default function Root() {
  return (
    <>
      <header className="main-backdrop-image h-dvh">
        <div className="flex h-14 justify-between justify-items-center px-6 sm:h-14 sm:px-10 lg:px-14 xl:px-20">
          <div className="flex justify-items-center">
            <p className="justify-self-center">logo goes here</p>
          </div>
          <Nav />
        </div>
        <Hero />
      </header>
      <main className="px-6 md:px-10 lg:px-14 xl:px-20 bg-blue-500 h-[1000px]"></main>
      <footer className="px-6 sm:px-10 lg:px-14 xl:px-20"></footer>
    </>
  );
}
