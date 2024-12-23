import DefaultHeader from "../../../../components/common/header/DefaultHeader";

import backdropImage from "../../../../assets/about-header-background-image-lg.jpeg";

const navButtons = [
  { text: "Home", link: "/" },
  { text: "Services", link: "/services" },
  { text: "Media", link: "/media" },
  { text: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <DefaultHeader
      imageSrc={backdropImage}
      imageAlt={"some pictures of myself"}
      navButtons={navButtons}
    />
  );
}
