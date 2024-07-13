import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import servicesSlice from "../../state/slices/services";

import "../../App.css";

interface FeatureProps {
  title: string;
  desc: string;
  icon: string;
  index: number;
  redirect: {
    route: string;
    positionY: number;
  };
}

const featureList = [
  {
    title: "Training by certified professionals",
    desc: `Learn from the experts. Our team of certified professionals deliver comprehensive training
     programs designed to equip you with the skills and knowledge you need to succeed`,

    icon: "",
    redirect: {
      route: "/about",
      positionY: 0,
    },
    key: 1,
  },

  {
    title: "Fitness and nutritional guidance",
    desc: `Get a holistic approach to wellness. Our combined fitness and nutritional programs help you achieve your goals, inside and out. `,
    icon: "",
    redirect: {
      route: "/services",
      positionY: 0,
    },
    key: 2,
  },

  {
    title: "Online options",
    desc: `Train smarter, not harder. Choose from personalized 1-on-1 programs or affordable designed plans.
     Perfect for busy schedules or existing gym-goers looking to elevate their workouts.`,
    icon: "",
    redirect: {
      route: "/services",
      positionY: 0,
    },
    key: 3,
  },
];

function Feature({ title, desc, icon, index, redirect }: FeatureProps) {
  const [isBoxComponentHovered, setBoxComponentHoveredState] = useState(false);
  const [isRedirectLinkHovered, setRedirectLinkHoveredState] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function redirectToPage(route: string, positionY: number): void {
    //sets the position to move to on the page being routed to. This is for
    //the 'learn more' links, which may point to a subsection of an existing page
    //for more information.

    dispatch(servicesSlice.actions.setPositionY(positionY));
    navigate(route);
  }

  //the goal of these handlers is to provide the necessary flags for interactivity
  //of the feature boxes themselves, as well as the redirect link individually.
  const handle = {
    redirect: (event: React.SyntheticEvent<HTMLElement>): void => {
      event.stopPropagation();

      redirectToPage(redirect.route, redirect.positionY);
    },

    boxComponentMouseEnter: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(true);
    },

    boxComponentMouseLeave: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(false);
      setRedirectLinkHoveredState(false);
    },

    redirectLinkMouseEnter: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(false);
      setRedirectLinkHoveredState(true);
    },

    redirectLinkMouseLeave: (
      event: React.SyntheticEvent<HTMLElement>,
    ): void => {
      event.stopPropagation();

      setBoxComponentHoveredState(true);
      setRedirectLinkHoveredState(false);
    },
  };

  return (
    <div
      className={`h-full w-full border-white px-8 py-12 transition-colors duration-300 hover:cursor-pointer ${index !== 0 && index !== featureList.length - 1 && "border-l-2 border-r-2"} ${isBoxComponentHovered && "bg-white"}`}
      onClick={handle.redirect}
      onMouseEnter={handle.boxComponentMouseEnter}
      onMouseLeave={handle.boxComponentMouseLeave}
    >
      <div className="h-5/6">
        <div className="mb-5 w-full hover:cursor-pointer">
          <img className="hover:cursor-pointer" src={icon}></img>
          <h3
            className={`lato-medium text-3xl transition-colors duration-300 hover:cursor-pointer ${isBoxComponentHovered ? "text-black" : "text-white"}`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`lato-medium transition-colors duration-300 hover:cursor-pointer ${isBoxComponentHovered ? "text-black" : "text-white"}`}
        >
          {desc}
        </p>
      </div>
      <div className="flex h-1/6 items-end justify-end">
        <a
          id={`feature-${index}-redirect`}
          onMouseEnter={handle.redirectLinkMouseEnter}
          onMouseLeave={handle.redirectLinkMouseLeave}
          className={`flex items-center justify-center px-3 py-1 transition-colors duration-300 hover:cursor-pointer ${isRedirectLinkHovered && "bg-white"}`}
        >
          <label
            htmlFor={`feature-${index}-redirect`}
            className={`lato-medium transition-colors duration-300 hover:cursor-pointer underline ${isBoxComponentHovered || isRedirectLinkHovered ? "text-black" : "text-white"}`}
          >
            Details
          </label>
        </a>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="flex h-dvh flex-col items-center">
      <div className="mb-8 flex w-[1150px] flex-col items-center p-4 px-6 pt-40 md:px-10 lg:px-14 xl:px-20">
        <h2 className="lato-bold mb-4 text-xl">Features</h2>
        <h3 className="lato-medium mb-10 text-6xl">Get Fit with Confidence!</h3>
        <p className="lato-medium mb-4 text-center text-xl leading-loose lg:w-[850px]">
          We've all been there-feeling lost, unsure of technique, worried about
          being judged, and having trouble actually 'sticking with it'. But what
          if getting fit could be fun, supportive, and guaranteed to bring
          results? Well you're in luck, that's exactly what we offer!
        </p>
      </div>
      <div className="flex h-[400px] w-full items-center justify-center bg-black px-6 py-4 md:px-10 lg:px-14 xl:px-20">
        <div className="grid h-full w-[1150px] grid-cols-3">
          {featureList.map((feature, index) => {
            return (
              <Feature
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
                redirect={feature.redirect}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
