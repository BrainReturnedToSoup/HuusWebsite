export default function NavBar() {
  return (
    <div className="flex min-h-[50px] items-center justify-between bg-red-500 px-4 py-2">
      <div> logo</div>

      <div className="hidden lg:block">regular nav</div>

      <div className="lg:hidden">mobile nav button</div>
    </div>
  );
}
