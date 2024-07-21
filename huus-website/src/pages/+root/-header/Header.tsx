import { useSelector } from "react-redux";

import NavBar from "./nav-bar/NavBar";
import Hero from "./hero/Hero";

export default function Header() {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <header className="header-backdrop-image flex h-dvh w-full flex-col bg-black">
      <NavBar />
      <Hero />
    </header>
  );
}
