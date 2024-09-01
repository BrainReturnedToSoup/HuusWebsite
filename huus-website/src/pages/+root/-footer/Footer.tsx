import DefaultFooter from "../../../components/default/footer/DefaultFooter";

const navColumns = [
  {
    title: "About",
    links: [
      {
        text: "Example 1",
        link: "/about",
      },
      {
        text: "Example 1",
        link: "/about",
      },
      {
        text: "Example 1",
        link: "/about",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        text: "Example 1",
        link: "/services",
      },
      {
        text: "Example 1",
        link: "/services",
      },
      {
        text: "Example 1",
        link: "/services",
      },
    ],
  },
  {
    title: "Media",
    links: [
      {
        text: "Example 1",
        link: "/media",
      },
      {
        text: "Example 1",
        link: "/media",
      },
      {
        text: "Example 1",
        link: "/media",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        text: "Example 1",
        link: "/contact",
      },
      {
        text: "Example 1",
        link: "/contact",
      },
      {
        text: "Example 1",
        link: "/contact",
      },
    ],
  },
];

export default function Footer() {
  return <DefaultFooter navColumns={navColumns} />;
}
