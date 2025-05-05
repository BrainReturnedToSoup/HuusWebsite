import { Preface } from "./preface/Preface_Structural";
import { Features } from "./features/Features_Structural";
import { CallToAction } from "./call-to-action/CallToAction_Structural";

import ptGeneric from "../../../assets/images/personal-trainer-generic.jpg";
import ptTeach from "../../../assets/images/personal-trainer-teach.jpg";
import ptOnline from "../../../assets/images/personal-trainer-online.jpg";

const FEATURES = [
  {
    title: "Hands-on training",
    desc: `Learn from the experts. Our team of certified professionals deliver comprehensive training
       programs designed to equip you with the skills and knowledge you need to succeed`,

    backgroundImage: ptGeneric,
    icon: "",
    redirect: {
      route: "/about",
    },
    key: 1,
  },

  {
    title: "Expert guidance",
    desc: `Get a holistic approach to wellness. Our combined fitness and nutritional programs help you achieve your goals, inside and out. `,
    backgroundImage: ptTeach,
    icon: "",
    redirect: {
      route: "/services",
    },
    key: 2,
  },

  {
    title: "Online options",
    desc: `Train smarter, not harder. Choose from personalized 1-on-1 programs or affordable designed plans.
       Perfect for busy schedules or existing gym-goers looking to elevate their workouts.`,
    backgroundImage: ptOnline,
    icon: "",
    redirect: {
      route: "/services",
    },
    key: 3,
  },
];

function Main() {
  return (
    <main>
      <div className="flex flex-col items-center py-4">
        <Preface />
        <Features features={FEATURES} />
      </div>
      <CallToAction />
    </main>
  );
}

export { Main };
