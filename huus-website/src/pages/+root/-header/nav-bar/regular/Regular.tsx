import Nav from "./Nav";

export default function Regular() {
  return (
    <div
      className={`flex h-[105px] w-full items-center justify-between bg-opacity-75 transition-colors duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center">
        <img alt="site logo" className="text-white"></img>
      </div>
      <Nav />
    </div>
  );
}
