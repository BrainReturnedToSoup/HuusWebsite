import "../../App.css";

interface FeatureProps {
  title: string;
  desc: string;
  icon: string;
  index: number;
}

const featureList = [
  { title: "", desc: "", icon: "", key: 1 },
  { title: "", desc: "", icon: "", key: 2 },
  { title: "", desc: "", icon: "", key: 3 },
];

function Feature({ title, desc, icon, index }: FeatureProps) {
  return (
    <div
      className={`h-full w-full border-gray-300 ${index !== 0 && index !== featureList.length - 1 && "border-l-2 border-r-2"}`}
    >
      <div>
        <h3></h3>
      </div>
      <p></p>
    </div>
  );
}

export default function Features() {
  return (
    <div className="flex h-dvh flex-col items-center pt-40">
      <div className="mb-20 flex w-[1150px] flex-col items-center p-4">
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
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
