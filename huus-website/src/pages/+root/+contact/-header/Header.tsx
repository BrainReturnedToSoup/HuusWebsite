import DefaultHeader from "../../../../components/default/header/DefaultHeader";

const navButtons = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Media", link: "/media" },
];

export default function Header() {
  return (
    <>
      <DefaultHeader imageSrc={""} imageAlt={""} navButtons={navButtons} />
    </>
  );
}
