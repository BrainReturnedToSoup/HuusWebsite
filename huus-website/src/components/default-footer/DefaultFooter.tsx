import FooterNav from "./footer-nav/FooterNav";
import FooterAside from "./footer-aside/FooterAside";
import CopywriteSection from "./copywrite-section/CopywriteSection";

import { FOOTER_NAV_COLUMNS } from "../../enums/pages/+root/-footer/footer";

interface DefaultFooter {
  navColumns: typeof FOOTER_NAV_COLUMNS;
}

export default function DefaultFooter({ navColumns }: DefaultFooter) {
  return (
    <footer className="flex items-center justify-center bg-neutral-200 px-2">
      <div className="flex h-full min-h-full max-w-[800px] grow flex-col">
        <FooterAside />
        <FooterNav navColumns={navColumns} />
        <CopywriteSection />
      </div>
    </footer>
  );
}
