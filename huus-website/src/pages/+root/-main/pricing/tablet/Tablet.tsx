import Offer from "./Offer";

import { OFFER_LIST } from "../../../../../enums/pages/+root/-main/pricing";

interface TabletProps {
  offerList: typeof OFFER_LIST;
}

export default function Tablet({ offerList }: TabletProps) {
  return (
    <>
      {offerList.map((offer, index) => {
        return (
          <Offer
            title={offer.title}
            desc={offer.desc}
            bullets={offer.bullets}
            price={offer.price}
            redirect={offer.redirect}
            index={index}
            key={index}
          />
        );
      })}
    </>
  );
}