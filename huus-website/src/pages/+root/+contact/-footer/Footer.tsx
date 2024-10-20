import DefaultFooter from "../../../../components/default/footer/DefaultFooter";

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
        link: "/service",
      },
      {
        text: "Example 1",
        link: "/service",
      },
      {
        text: "Example 1",
        link: "/service",
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
];

export default function Footer() {
  return (
    <>
      <DefaultFooter navColumns={navColumns} />
    </>
  );
}
