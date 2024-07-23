import NavColumn from "./NavColumn";

import FOOTER_NAV_COLUMNS from "../../../../../enums/pages/+root/-footer/footer";

interface TabletProps {
  footerNavColumns: typeof FOOTER_NAV_COLUMNS;
}

export default function Tablet({ footerNavColumns }: TabletProps) {
  return (
    <div className="flex h-full w-2/3 pb-4 pt-8">
      {footerNavColumns.map((column) => {
        return <NavColumn title={column.title} links={column.links} />;
      })}
    </div>
  );
}
