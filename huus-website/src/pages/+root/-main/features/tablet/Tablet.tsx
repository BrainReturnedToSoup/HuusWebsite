import { FEATURE_LIST } from "../../../../../enums/pages/+root/-main/features";

import Feature from "./Feature";

interface TabletProps {
  featureList: typeof FEATURE_LIST;
}

export default function Tablet({ featureList }: TabletProps) {
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
