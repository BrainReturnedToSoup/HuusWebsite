import NavColumn from "./NavColumn";

import FOOTER_NAV_COLUMNS from "../../../../../enums/pages/+root/-footer/footer";

interface RegularProps {
  footerNavColumns: typeof FOOTER_NAV_COLUMNS;
}

export default function Regular({ footerNavColumns }: RegularProps) {
  return (
    <div className="flex h-full w-2/3 grow px-2 py-6">
      {footerNavColumns.map((column) => {
        return <NavColumn title={column.title} links={column.links} />;
      })}
    </div>
  );
}
