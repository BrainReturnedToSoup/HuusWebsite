import { useSelector } from "react-redux";
import { BaseServices } from "./base/BaseServices_Structural";
import { ServiceBundles } from "./bundles/ServiceBundles_Structural";
import { ServiceOfferingsSubsection } from "./service-offerings-subsection/ServiceOfferingsSubsection_Structural";
import { AppStoreRootState } from "../../../../../state/react-redux/store";

const BASE = [
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireOnClick: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireOnClick: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireOnClick: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Beginner", "Zero-commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per session",
    enquireOnClick: () => {},
  },
];

const BUNDLES = [
  {
    title: "Random Service",
    keywords: ["Intermediate", "End-to-end", "Commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per bundle",
    enquireOnClick: () => {},
  },
  {
    title: "Random Service",
    keywords: ["Intermediate", "End-to-end", "Commitment"],
    description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
              parturient facilisis viverra, in senectus posuere. Donec sem
              sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
              class libero duis sapien sit. Adipiscing massa gravida neque habitant
              nisl egestas nec.`,
    price: "$24.99",
    quantifier: "Per bundle",
    enquireOnClick: () => {},
  },
];

const SERVICES = [
  {
    title: "Base",
    serviceOfferings: [
      {
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        quantifier: "Per session",
        enquireOnClick: () => {},
      },
      {
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        quantifier: "Per session",
        enquireOnClick: () => {},
      },
      {
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        quantifier: "Per session",
        enquireOnClick: () => {},
      },
      {
        title: "Random Service",
        keywords: ["Beginner", "Zero-commitment"],
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
        price: "$24.99",
        quantifier: "Per session",
        enquireOnClick: () => {},
      },
    ],
  },
  { title: "Bundles", serviceOfferings: [
    {
      title: "Random Service",
      keywords: ["Intermediate", "End-to-end", "Commitment"],
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
      price: "$24.99",
      quantifier: "Per bundle",
      enquireOnClick: () => {},
    },
    {
      title: "Random Service",
      keywords: ["Intermediate", "End-to-end", "Commitment"],
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
                parturient facilisis viverra, in senectus posuere. Donec sem
                sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
                class libero duis sapien sit. Adipiscing massa gravida neque habitant
                nisl egestas nec.`,
      price: "$24.99",
      quantifier: "Per bundle",
      enquireOnClick: () => {},
    },
  ] },
];

function ServiceOfferings() {
  const serviceOfferingsSubsections = useSelector(
    (state: AppStoreRootState) =>
      state.serviceOfferingsSlice.serviceOfferingsSubsections,
  );

  return (
    <div>
      {serviceOfferingsSubsections.map((subsection) => {
        return (
          <ServiceOfferingsSubsection
            subsectionTitle={subsection.title}
            serviceOfferings={subsection.serviceOfferings}
          />
        );
      })}
    </div>
  );
}

export { ServiceOfferings };
