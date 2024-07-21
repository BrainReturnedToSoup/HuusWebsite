import NavBar from "./nav/NavBar";
import Hero from "./hero/Hero";

export default function Header() {
  return (
    <header className="header-backdrop-image flex h-dvh w-full flex-col bg-black">
      <NavBar />
      <Hero />
    </header>
  );
}
