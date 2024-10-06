function PricingBox({ price, availability, contactStateUpdate }) {
  return (
    <div className="flex min-w-[300px] flex-col items-center justify-center">
      <div className="px-4">
        <h1 className="lato-bold mb-4 text-center text-6xl">{price}</h1>
        <h2 className="lato-bold mb-6 text-center text-sm">{availability}</h2>
      </div>
      <button
        onClick={() => {
          // needs to set contact state first, and then redirect to the contact page
          contactStateUpdate(); // should already be binded to change the redux state for contact form as per the parent.

          // invoke the react router hook to redirect to the contact page.
        }}
      ></button>
    </div>
  );
}

function Consultation() {
  return (
    <div className="my-6 flex min-h-[375px]">
      <div className="mr-4 flex grow flex-col justify-center p-4">
        <h1 className="lato-bold mb-2 text-2xl">Service title</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.
        </p>
      </div>
      <PricingBox
        price={"$24.99"}
        availability={"*Local only"}
        contactStateUpdate={() => {}}
      />
    </div>
  );
}

function InPersonTraining() {
  return (
    <div className="my-6 flex min-h-[375px]">
      <div className="mr-4 flex grow flex-col justify-center p-4">
        <h1 className="lato-bold mb-2 text-2xl">Service title</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.
        </p>
      </div>
      <PricingBox
        price={"$24.99"}
        availability={"*Local only"}
        contactStateUpdate={() => {}}
      />
    </div>
  );
}

function DietAndNutrition() {
  return (
    <div className="my-6 flex min-h-[375px]">
      <div className="mr-4 flex grow flex-col justify-center p-4">
        <h1 className="lato-bold mb-2 text-2xl">Service title</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.
        </p>
      </div>
      <PricingBox
        price={"$24.99"}
        availability={"*Local only"}
        contactStateUpdate={() => {}}
      />
    </div>
  );
}

function OnlineOptions() {
  return (
    <div className="my-6 flex min-h-[375px]">
      <div className="mr-4 flex grow flex-col justify-center p-4">
        <h1 className="lato-bold mb-2 text-2xl">Service title</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.
        </p>
      </div>
      <PricingBox
        price={"$24.99"}
        availability={"*Local only"}
        contactStateUpdate={() => {}}
      />
    </div>
  );
}

function CustomOptions() {
  return (
    <div className="my-6 flex min-h-[375px]">
      <div className="mr-4 flex grow flex-col justify-center p-4">
        <h1 className="lato-bold mb-2 text-2xl">Service title</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Est ultricies
          parturient facilisis viverra, in senectus posuere. Donec sem
          sollicitudin malesuada torquent nostra pulvinar. Venenatis vehicula
          class libero duis sapien sit. Adipiscing massa gravida neque habitant
          nisl egestas nec.
        </p>
      </div>
      <PricingBox
        price={"$24.99"}
        availability={"*Local only"}
        contactStateUpdate={() => {}}
      />
    </div>
  );
}

// bundles of the above options that are cheaper
function Bundles() {
  return <div></div>;
}

export default function Services() {
  return (
    <div className="w-full py-4">
      <Consultation />
      <InPersonTraining />
      <DietAndNutrition />
      <OnlineOptions />
      <CustomOptions />
      <Bundles />
    </div>
  );
}
