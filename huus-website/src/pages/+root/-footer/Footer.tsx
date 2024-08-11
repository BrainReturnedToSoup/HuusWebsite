import DefaultFooter from "../../../components/default/footer/DefaultFooter";

import { FOOTER_NAV_COLUMNS } from "../../../enums/pages/+root/-footer/footer";

export default function Footer() {
  return <DefaultFooter navColumns={FOOTER_NAV_COLUMNS} />;
}
