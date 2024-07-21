import Offer from "./Offer";

import { OFFER_LIST } from "../../../../../enums/pricing";

interface PhoneProps {
  offerList: typeof OFFER_LIST;
}

export default function Phone({ offerList }: PhoneProps) {
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
