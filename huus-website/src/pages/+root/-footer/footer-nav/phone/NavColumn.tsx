import FOOTER_NAV_COLUMNS from "../../../../../enums/pages/+root/-footer/footer";

interface LinkProps {
  text: string;
  route: string;
}

function Link({ text, route }: LinkProps) {
  return (
    <li className="mb-4 flex h-[36px] items-center justify-center px-2">
      <a href={route}>{text}</a>
    </li>
  );
}

interface NavColumnProps {
  columnData: (typeof FOOTER_NAV_COLUMNS)[0];
}

export default function NavColumn({ columnData }: NavColumnProps) {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center p-2 pt-4">
      <h3 className="mb-4 text-2xl">{columnData.title}</h3>
      <ul>
        {columnData.links.map((link, index) => {
          return (
            <Link text={link.text} route={link.redirect.route} key={index} />
          );
        })}
      </ul>
    </div>
  );
}
