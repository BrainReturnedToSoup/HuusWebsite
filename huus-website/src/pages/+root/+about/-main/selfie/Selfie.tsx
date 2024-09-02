export default function Selfie({ setSelfieLoaded }) {
  return (
    <div className="mb-6 aspect-square min-w-[200px] max-w-[275px] grow md:mb-0 md:min-w-[175px] md:max-w-[200px]">
      <img
        className="flex h-full w-full items-center justify-center rounded-full bg-black text-white"
        alt="selfie"
      />
    </div>
  );
}
