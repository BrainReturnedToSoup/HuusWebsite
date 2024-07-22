import Offer from "./Offer";

import { OFFER_LIST } from "../../../../../enums/pages/+root/-main/pricing";

interface TabletProps {
  offerList: typeof OFFER_LIST;
}

export default function Regular({ offerList }: TabletProps) {
  return (
    <div className="flex h-[500px] w-full items-center justify-center py-4 lg:px-10">
      <div
        className={`grid h-full grid-rows-1 md:w-[1024px] grid-cols-${OFFER_LIST.length} gap-2`}
      >
        {offerList.map((offer, index) => {
          return (
            <Offer
              title={offer.title}
              desc={offer.desc}
              bullets={offer.bullets}
              price={offer.price}
              redirect={offer.redirect}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
