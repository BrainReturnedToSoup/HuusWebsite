import DefaultHeader from "../../../components/default/header/DefaultHeader";

const navButtons = [
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Media", link: "/media" },
  { text: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <DefaultHeader
      backdropImageClass={"root-header-backdrop-image"}
      navButtons={navButtons}
    />
  );
}
