interface OfferProps {
  title: string;
  desc: string;
  price: number;
  styling: { heightRatio: string };
}

const offers = [
  {
    title: "Example 1",
    desc: "Description 1",
    price: 3.99,
    key: 0,
    styling: { heightRatio: "full" },
  },
  {
    title: "Example 2",
    desc: "Description 2",
    price: 17.99,
    key: 1,
    styling: { heightRatio: "full" },
  },
  {
    title: "Example 3",
    desc: "Description 3",
    price: 24.99,
    key: 2,
    styling: { heightRatio: "full" },
  },
];

function Offer({ title, desc, price, styling }: OfferProps) {
  return <div></div>;
}

export default function Pricing() {
  return (
    <div className="flex h-dvh flex-col items-center bg-blue-500">
      <div className="mb-8 flex w-[1150px] flex-col items-center p-4 px-6 pt-40 md:px-10 lg:px-14 xl:px-20">
        <h2 className="lato-bold mb-4 text-xl">Pricing</h2>
      </div>
      <div className="flex h-[400px] w-full items-center justify-center py-4 md:px-10 lg:px-14 xl:px-20">
        <div
          className={`grid-col grid h-full grid-cols-${offers.length} bg-red-500`}
        >
          {offers.map((offer) => {
            return (
              <Offer
                title={offer.title}
                desc={offer.desc}
                price={offer.price}
                styling={offer.styling}
                key={offer.key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
