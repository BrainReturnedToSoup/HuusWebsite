import { ServiceRow } from "../service-rows/ServiceRow_Structural";

import { BaseServicesProps_Interface } from "./BaseServices_Interface";

function BaseServices({ groupTitle, rows }: BaseServicesProps_Interface) {
  return (
    <div className="mb-12 w-full py-14">
      <h1 className="default-font-bold text-center text-4xl md:text-start md:text-3xl">
        {groupTitle}
      </h1>
      {rows.map(
        ({
          title,
          keywords,
          description,
          price,
          quantifier,
          enquireOnClick: enquireOnClick,
        }) => {
          return (
            <ServiceRow
              title={title}
              keywords={keywords}
              description={description}
              price={price}
              quantifier={quantifier}
              enquireOnClick={enquireOnClick}
            />
          );
        },
      )}
    </div>
  );
}

export { BaseServices };
