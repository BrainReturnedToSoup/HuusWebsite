import FOOTER_NAV_COLUMNS from "../../../../../enums/pages/+root/-footer/footer";

interface TabletProps {
  footerNavColumns: typeof FOOTER_NAV_COLUMNS;
}

export default function Tablet({ footerNavColumns }: TabletProps) {
  return <div>Footer nav - Tablet</div>;
}
