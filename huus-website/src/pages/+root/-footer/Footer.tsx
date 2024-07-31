import FooterNav from "./footer-nav/FooterNav";
import FooterAside from "./footer-aside/FooterAside";
import CopywriteSection from "./copywrite-section/CopywriteSection";

import { FOOTER_NAV_COLUMNS } from "../../../enums/pages/+root/-footer/footer";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-2">
      <div className="flex h-full min-h-full max-w-[800px] grow flex-col">
        <FooterAside />
        <FooterNav navColumns={FOOTER_NAV_COLUMNS} />
        <CopywriteSection />
      </div>
    </footer>
  );
}
