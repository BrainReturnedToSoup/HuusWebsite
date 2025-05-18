import { ServiceOfferingsSubsectionProps_Interface } from "./ServiceOfferingsSubsection_Interface";

import { ServiceOffering } from "./service-offering/ServiceOffering_Structural";

function ServiceOfferingsSubsection({
  subsectionTitle,
  serviceOfferings,
}: ServiceOfferingsSubsectionProps_Interface) {
  return (
    <div className="w-full py-14">
      <h1 className="default-font-bold text-center text-4xl md:text-start md:text-3xl">
        {subsectionTitle}
      </h1>
      {serviceOfferings.map((offering) => {
        return (
          <ServiceOffering
            key={offering.id}
            title={offering.title}
            keywords={offering.keywords}
            description={offering.description}
            price={offering.price}
            priceQuantifier={offering.priceQuantifier}
            enquireOnClick={offering.enquireOnClick}
          />
        );
      })}
    </div>
  );
}

export { ServiceOfferingsSubsection };
