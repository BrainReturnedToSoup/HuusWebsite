import FOOTER_NAV_COLUMNS from "../../../../../enums/pages/+root/-footer/footer";

import NavColumn from "./NavColumn";

interface PhoneProps {
  footerNavColumns: typeof FOOTER_NAV_COLUMNS;
}

export default function Phone({ footerNavColumns }: PhoneProps) {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {footerNavColumns.map((columnData) => (
        <NavColumn columnData={columnData} />
      ))}
    </div>
  );
}
