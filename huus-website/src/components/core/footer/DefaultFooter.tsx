import FooterNav from "./footer-nav/FooterNav";
import FooterAside from "./footer-aside/FooterAside";
import CopywriteSection from "./copywrite-section/CopywriteSection";

export default function DefaultFooter({ navColumns }) {
  return (
    <footer
      className="flex items-center justify-center bg-neutral-200 px-2"
      style={{ position: "inherit" }}
    >
      <div className="flex h-full min-h-full max-w-[800px] grow flex-col">
        <FooterAside />
        <FooterNav navColumns={navColumns} />
        <CopywriteSection />
      </div>
    </footer>
  );
}
