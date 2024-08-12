export default function CallToAction() {
  return (
    <div className="flex items-center justify-center py-10 lg:py-20">
      <div className="flex h-full max-w-[760px] flex-col items-center justify-center px-4">
        <h2 className="lato-medium mb-3 text-center text-4xl lg:text-5xl">
          Like what you see?
        </h2>
        <a
          className={`lato-medium mb-4 flex justify-center px-4 py-1 text-center text-2xl underline transition-colors duration-150 hover:cursor-pointer hover:bg-black hover:text-white`}
        >
          Schedule a consultation today!
        </a>
        <p className="lato-medium text-center text-xl leading-loose">
          Random description here Random description here Random description
          here Random description here Random description here Random
          description here Random description here Random description here
          Random description here Random description here
        </p>
      </div>
    </div>
  );
}
