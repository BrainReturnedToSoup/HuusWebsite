import { FEATURE_LIST } from "../../../../../enums/pages/+root/-main/features";

import Feature from "./Feature";

interface RegularProps {
  featureList: typeof FEATURE_LIST;
}

export default function Regular({ featureList }: RegularProps) {
  return (
    <div className="flex w-full items-center justify-center bg-black px-6 py-4 md:px-10 lg:px-14 xl:px-20">
      <div className="grid h-full grid-cols-3 lg:w-[1150px]">
        {featureList.map((feature, index) => {
          return (
            <Feature
              title={feature.title}
              desc={feature.desc}
              backgroundImageProp={feature.backgroundImageProp}
              redirect={feature.redirect}
              index={index}
              listLength={featureList.length}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
