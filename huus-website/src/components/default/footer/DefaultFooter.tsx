import CopywriteSection from "./copywrite-section/CopywriteSection";
import { SocialMediaLinks } from "./social-media-links/SocialMediaLinks";

function DefaultFooter() {
  return (
    <footer className="flex items-center justify-center bg-black px-2">
      <div className="flex h-full min-h-full max-w-[800px] grow flex-col items-center justify-center pt-2">
        <SocialMediaLinks />
        <CopywriteSection />
      </div>
    </footer>
  );
}

export { DefaultFooter };
