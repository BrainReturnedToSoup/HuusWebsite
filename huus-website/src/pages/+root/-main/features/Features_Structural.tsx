import { Feature } from "./feature/Feature_Structural";

import { FeaturesProps_Interface } from "./Features_Interface";

export default function Features({ features }: FeaturesProps_Interface) {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-black px-1 py-1 lg:flex-row lg:items-stretch lg:px-4 lg:py-2">
      {features.map((feature, index) => (
        <Feature feature={feature} key={index} />
      ))}
    </div>
  );
}
