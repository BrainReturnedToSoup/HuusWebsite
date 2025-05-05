import { KeywordsProps_Interface } from "./Keywords_Interface";

function Keywords({ words, isEnquireHovered }: KeywordsProps_Interface) {
  return (
    <div className="mb-5 flex items-center">
      {words.map((word, index) => {
        let classString =
          "px-2 text-sm default-font-bold transition-colors duration-150 ease-in-out";

        if (index !== words.length - 1) {
          classString += " border-r-[1px]";

          if (isEnquireHovered) {
            classString += " border-white";
          } else {
            classString += " border-neutral-400";
          }
        }

        if (isEnquireHovered) {
          classString += " text-white";
        }

        return <h2 className={classString}>{word}</h2>;
      })}
    </div>
  );
}

export { Keywords };
