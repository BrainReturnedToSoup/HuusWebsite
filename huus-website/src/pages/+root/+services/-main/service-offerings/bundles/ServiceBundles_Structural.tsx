import { ServiceOffering } from "../service-offerings-subsection/service-offering/ServiceOffering_Structural";

import { ServiceBundlesProps_Interface } from "./ServiceBundles_Interface";

function ServiceBundles({ groupTitle, rows }: ServiceBundlesProps_Interface) {
  return (
    <div className="w-full py-14">
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
          enquireOnClick,
        }) => {
          return (
            <ServiceOffering
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

export { ServiceBundles };
