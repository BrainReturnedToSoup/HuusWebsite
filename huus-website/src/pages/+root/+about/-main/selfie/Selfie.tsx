export default function Selfie({ setSelfieLoaded }) {
  return (
    <div className="aspect-square min-w-[175px] max-w-[200px] grow">
      <img
        className="flex h-full w-full items-center justify-center rounded-full bg-black text-white"
        alt="selfie"
      />
    </div>
  );
}
