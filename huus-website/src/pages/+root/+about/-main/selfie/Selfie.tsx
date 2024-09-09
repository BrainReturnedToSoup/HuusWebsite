import SmartImage from "../../../../../components/common/SmartImage";

import dummyImage from "../../../../../assets/personal-trainer-generic.jpg";

interface SelfieInterface {
  setSelfieInitialFetching: (state: boolean) => void;
  setSelfieFetchHasFailed: (state: boolean) => void;
}

export default function Selfie({
  setSelfieInitialFetching,
  setSelfieFetchHasFailed,
}: SelfieInterface) {
  return (
    <SmartImage
      src={dummyImage}
      alt={"selfie"}
      classString={
        "mb-6 aspect-square min-w-[200px] max-w-[275px] grow md:mb-0 md:min-w-[175px] md:max-w-[200px] md:mr-10 flex h-full w-full items-center justify-center rounded-full bg-black text-white"
      }
      timeoutDelay={3000}
      intervalDelay={6000}
      setInitialFetching={setSelfieInitialFetching}
      setHasFailed={setSelfieFetchHasFailed}
    />
  );
}
