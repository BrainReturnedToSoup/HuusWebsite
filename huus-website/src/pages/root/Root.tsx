import Nav from "./Nav";
import Hero from "./Hero";

export default function Root() {
  return (
    <>
      <header>
        <div className="flex h-14 justify-between bg-red-500 pl-5 pr-5">
          <div>logo goes here</div>
          <Nav />
        </div>
        <Hero />
      </header>
      <main className="pl-5 pr-5"></main>
      <footer className="pl-5 pr-5"></footer>
    </>
  );
}
