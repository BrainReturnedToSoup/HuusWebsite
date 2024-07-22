export default function Tablet() {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center bg-black px-14 pb-16 xl:px-20">
      <h2 className="mb-3 text-6xl text-white">Like what you see?</h2>
      <a
        className={`mb-6 flex items-center justify-center py-1 pl-4 pr-2 text-2xl text-white underline hover:cursor-pointer`}
      >
        Schedule a consultation today!
      </a>
      <p className="w-[675px] text-center leading-7 text-white">
        Random description here Random description here Random description here
        Random description here Random description here Random description here
        Random description here Random description here Random description here
        Random description here
      </p>
    </div>
  );
}
