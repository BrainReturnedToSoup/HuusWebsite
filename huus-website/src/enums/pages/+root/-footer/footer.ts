import instagramNeutral700 from "../../../../assets/instragram-neutral-700.svg";
import tiktokNeutral700 from "../../../../assets/tiktok-neutral-700.svg";

const footerNavColumnsMutable = [
  {
    title: "Services",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
  {
    title: "About",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
      { text: "Example 1", redirect: { route: "/about", positionY: 0 } },
    ],
  },
];

export const FOOTER_NAV_COLUMNS = Object.freeze(footerNavColumnsMutable);

const footerSocialMediaLinksMutable = [
  { link: "", icon: instagramNeutral700, alt: "Instagram" },
  { link: "", icon: tiktokNeutral700, alt: "Tiktok" },
];

export const FOOTER_SOCIAL_MEDIA_LINKS = Object.freeze(
  footerSocialMediaLinksMutable,
);
