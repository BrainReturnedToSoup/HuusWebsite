import NavMenuButton from "./NavMenuButton";

export default function Mobile() {
  return (
    <div className="flex items-center justify-between p-4 text-white">
      <div className="flex items-center justify-center">
        <img alt="site logo" className="text-white"></img>
      </div>
      <NavMenuButton />
    </div>
  );
}
