import DefaultFooter from "../../../../components/core/footer/DefaultFooter";

const navColumns = [
  {
    title: "Home",
    links: [
      {
        text: "Example 1",
        link: "/",
      },
      {
        text: "Example 1",
        link: "/",
      },
      {
        text: "Example 1",
        link: "/",
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
