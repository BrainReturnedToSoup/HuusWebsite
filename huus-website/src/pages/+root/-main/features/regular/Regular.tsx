import { FEATURE_LIST } from "../../../../../enums/pages/+root/-main/features";

import Feature from "./Feature";

interface RegularProps {
  featureList: typeof FEATURE_LIST;
}

export default function Regular({ featureList }: RegularProps) {
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
            listLength={featureList.length}
            key={index}
          />
        );
      })}
    </>
  );
}
