import DefaultHeader from "../../../../components/core/header/DefaultHeader"

const navButtons = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Media", link: "/media" },
    { text: "Contact", link: "/contact" },
  ];

export default function Header() {
    return <DefaultHeader imageSrc={""} imageAlt={""} navButtons={navButtons}/>
}