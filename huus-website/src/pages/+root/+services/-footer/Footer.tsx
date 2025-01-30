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
