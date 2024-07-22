import { FEATURE_LIST } from "../../../../../enums/pages/+root/-main/features";

import Feature from "./Feature";

interface PhoneProps {
  featureList: typeof FEATURE_LIST;
}

export default function Phone({ featureList }: PhoneProps) {
  return (
    <div className="flex w-full flex-col bg-black py-2">
      {featureList.map((feature, index) => {
        return (
          <Feature
            title={feature.title}
            desc={feature.desc}
            backgroundImageProp={feature.backgroundImageProp}
            redirect={feature.redirect}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}
