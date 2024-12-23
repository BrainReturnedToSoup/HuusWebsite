import DefaultHeader from "../../../components/common/header/DefaultHeader";

import rootPageBackdropImage from "../../../assets/main-backdrop-image.jpg";

const navButtons = [
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Media", link: "/media" },
  { text: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <DefaultHeader
      imageSrc={rootPageBackdropImage}
      imageAlt={""}
      navButtons={navButtons}
    />
  );
}
