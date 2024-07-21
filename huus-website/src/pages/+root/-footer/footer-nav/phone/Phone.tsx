import FOOTER_NAV_COLUMNS from "../../../../../enums/pages/+root/-footer/footer";

interface PhoneProps {
  footerNavColumns: typeof FOOTER_NAV_COLUMNS;
}

export default function Phone({ footerNavColumns }: PhoneProps) {
  return <div>Footer nav - Phone</div>;
}
