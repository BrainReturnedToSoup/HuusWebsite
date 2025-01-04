import { footerRepository } from "../../../../state/repositories/footer/FooterRepository_Singleton";
import { FooterNavSetLinksServices_Impl } from "./FooterNavSetLinksServices_Impl";

import { FooterNavLinkSets } from "./FooterNavSetLinksService_Interface";

// link setup is basically just a list of different links
const footerNavLinkSets: FooterNavLinkSets = {
  // ... to be added
};

const footerNavSetLinksService = new FooterNavSetLinksServices_Impl(
  footerRepository,
  footerNavLinkSets,
);

export { footerNavSetLinksService, footerNavLinkSets };
