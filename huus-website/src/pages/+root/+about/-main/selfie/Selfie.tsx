interface SelfieInterface {}

export default function Selfie({}: SelfieInterface) {
  return (
    <div className="mb-6 flex aspect-square h-full w-full min-w-[200px] max-w-[275px] grow items-center justify-center rounded-full bg-black text-white md:mb-0 md:mr-10 md:min-w-[175px] md:max-w-[200px]"></div>
  );
}
