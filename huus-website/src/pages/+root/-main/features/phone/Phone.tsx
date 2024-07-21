import { FEATURE_LIST } from "../../../../../enums/features";

import Feature from "./Feature";

interface PhoneProps {
  featureList: typeof FEATURE_LIST;
}

export default function Phone({ featureList }: PhoneProps) {
  return (
    <>
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
    </>
  );
}
