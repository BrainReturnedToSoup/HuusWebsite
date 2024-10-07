function PricingBox({ price, redirectContact, quantifier}) {
  return (
    <div className="flex min-w-[350px] flex-col items-center justify-center border-l-2 border-neutral-300">
      <div className="px-4">
        <div className="flex">
          <h1 className="lato-bold mb-4 text-center text-6xl">{price}</h1>
          <h2 className="lato-bold pl-2 pt-1 text-sm">{quantifier}</h2>
        </div>
      </div>
      <button
        onClick={() => {
          // needs to set contact state first, and then redirect to the contact page
          redirectContact(); // should already be binded to change the redux state for contact form as per the parent.

          // invoke the react router hook to redirect to the contact page.
        }}
      ></button>
    </div>
  );
}

function ServiceRow({ title, keywords, description, price, quantifier, redirectContact }) {
  return (
    <div className="my-8 flex py-6">
      <div className="mr-4 flex grow flex-col justify-center p-4">
        <h1 className="lato-bold mb-3 text-3xl">{title}</h1>
        <div className="mb-5 flex items-center">
          {keywords.map((word, index) => {
            let classString = "px-2 text-sm lato-bold";

            if (index !== keywords.length - 1) {
              classString += " border-r-2 border-neutral-300";
            }

            return <h2 className={classString}>{word}</h2>;
          })}
        </div>
        <p className="lato-medium leading-relaxed">{description}</p>
      </div>
      <PricingBox price={price} redirectContact={redirectContact} quantifier={quantifier} />
    </div>
  );
}

// bundles of the above options that are cheaper, but require some commitment.
function Bundles() {
  return <div></div>;
}

export default function Services() {
  return (
    <div className="w-full py-4">
      <ServiceRow
        title={"Random Service"}
        keywords={["Beginner", "Zero-commitment"]}
        description={`Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.`}
        price={"$24.99"}
        quantifier={"Per session"}
        redirectContact={() => {}}
      />
      <ServiceRow
        title={"Random Service"}
        keywords={["Beginner", "Zero-commitment"]}
        description={`Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.`}
        price={"$24.99"}
        quantifier={"Per session"}
        redirectContact={() => {}}
      />
      <ServiceRow
        title={"Random Service"}
        keywords={["Beginner", "Zero-commitment"]}
        description={`Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.`}
        price={"$24.99"}
        quantifier={"Per session"}
        redirectContact={() => {}}
      />
    </div>
  );
}
