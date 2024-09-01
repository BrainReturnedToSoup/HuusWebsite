import DefaultHeader from "../../../../components/default/header/DefaultHeader";

const navButtons = [
  { text: "Home", link: "/" },
  { text: "Services", link: "/services" },
  { text: "Media", link: "/media" },
  { text: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <DefaultHeader
      backdropImageClass={"about-header-backdrop-image"}
      navButtons={navButtons}
    />
  );
}
