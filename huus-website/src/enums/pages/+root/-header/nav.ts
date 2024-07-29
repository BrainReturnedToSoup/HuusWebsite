function createImmutable<T>(arr: Array<T>): ReadonlyArray<Readonly<T>> {
  return Object.freeze(arr.map((obj) => Object.freeze(obj)));
}

const navLinksMutable = [
  { name: "Services", route: "/services", key: 1 },
  { name: "Contact", route: "/contact", key: 2 },
  { name: "Media", route: "/media", key: 3 },
  { name: "About", route: "/about", key: 4 },
];

export const NAV_LINKS = createImmutable(navLinksMutable);

//values are in px, which these values will be used by a
//position algo to determine what semantic section of the page
//you are currently viewing.
const navLinksTransitionRangesMutable = [
  { start: 0, end: 0, section: "" },
  { start: 0, end: 0, section: "" },
  { start: 0, end: 0, section: "" },
];

export const NAV_LINKS_TRANSITION_RANGES = createImmutable(
  navLinksTransitionRangesMutable,
);
