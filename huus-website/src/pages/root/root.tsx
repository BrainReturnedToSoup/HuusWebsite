const headerNavLinks = [
  { name: "Services", route: "/services", key: 1 },
  { name: "Contact", route: "/contact", key: 2 },
  { name: "Media", route: "/media", key: 3 },
  { name: "About", route: "/about", key: 4 },
];


function Nav() {
  //use the responsive design max widths along with the redux store
  //that keeps track of the current screen width to display specific components
  //based on the device width. Responsive design 101

  return (
    <nav>
      {headerNavLinks.map((buttonData) => {
        return (
          <button key={buttonData.key} className="">
            <a key={buttonData.key} href={buttonData.route}>
              {buttonData.name}
            </a>
          </button>
        );
      })}
    </nav>
  );
}

export default function Root() {
  return (
    <>
      <header>
        <div className="flex h-14 justify-between bg-red-500 pl-5 pr-5">
          <div>logo goes here</div>
          <Nav />
        </div>
        <div className="h-[420px] bg-green-600">Hero goes here</div>
      </header>
      <main className="pl-5 pr-5"></main>
      <footer className="pl-5 pr-5"></footer>
    </>
  );
}
