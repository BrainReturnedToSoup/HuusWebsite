const navLinksMutable = [
  { name: "Services", route: "/services", key: 1 },
  { name: "Contact", route: "/contact", key: 2 },
  { name: "Media", route: "/media", key: 3 },
  { name: "About", route: "/about", key: 4 },
];

function createImmutable<T>(arr: Array<T>): ReadonlyArray<Readonly<T>> {
  return Object.freeze(arr.map((obj) => Object.freeze(obj)));
}

const NAV_LINKS = createImmutable(navLinksMutable);

export default NAV_LINKS;
