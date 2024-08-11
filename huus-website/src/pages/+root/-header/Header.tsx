import NavBar from "./nav-bar/NavBar";

export default function Header() {
  return (
    <header className="h-[765px] bg-black">
      <div className={`header-backdrop-image h-full lg:px-20`}>
        <NavBar />
      </div>
    </header>
  );
}
