import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    title: "Example 1",
    desc: "description 1",
    icon: "",
    redirect: {
      route: "/services",
      positionY: 0,
    },
    key: 1,
  },

  {
    title: "Example 2",
    desc: "description 2",
    icon: "",
    redirect: {
      route: "/services",
      positionY: 0,
    },
    key: 2,
  },

  {
    title: "Example 3",
    desc: "description 3",
    icon: "",
    redirect: {
      route: "/services",
      positionY: 0,
    },
    key: 3,
  },
];

function Feature({ title, desc, icon, index, redirect }: FeatureProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function redirectToPage(route: string, positionY: number): void {
    //sets the position to move to on the page being routed to. This is for
    //the 'learn more' links, which may point to a subsection of an existing page
    //for more information.

    dispatch(servicesSlice.actions.setPositionY(positionY));
    navigate(route);
  }

  return (
    <div
      className={`h-full w-full border-gray-300 bg-red-200 px-8 py-14 ${index !== 0 && index !== featureList.length - 1 && "border-l-2 border-r-2"}`}
    >
      <div className="mb-5 w-full">
        <img src={icon}></img>
        <h3 className="text-3xl">{title}</h3>
      </div>
      <p>{desc}</p>
      <div>
        <a
          onClick={() => {
            redirectToPage(redirect.route, redirect.positionY);
          }}
          id={`feature-${index}-redirect`}
        >
          <label htmlFor={`feature-${index}-redirect`}>Learn more</label>
          <img></img>
        </a>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="flex h-dvh flex-col items-center pt-40">
      <div className="mb-8 flex w-[1150px] flex-col items-center p-4">
        <h2 className="lato-medium mb-10 text-6xl">Get Fit with Confidence!</h2>
        <p className="lato-medium mb-4 text-center text-xl leading-loose lg:w-[850px]">
          We've all been there-feeling lost, unsure of technique, worried about
          being judged, and having trouble actually 'sticking with it'. But what
          if getting fit could be fun, supportive, and guaranteed to bring
          results? Well you're in luck, that's exactly what we offer!
        </p>
      </div>
      <div className="grid h-[400px] w-[1150px] grid-cols-3">
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
  );
}
