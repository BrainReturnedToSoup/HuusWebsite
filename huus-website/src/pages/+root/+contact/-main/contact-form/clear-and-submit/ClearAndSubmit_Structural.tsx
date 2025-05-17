import { ClearAndSubmitProps_Interface } from "./ClearAndSubmit_Interface";

export function ClearAndSubmit({}: ClearAndSubmitProps_Interface) {
  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        className="default-font-bold min-w-[100px] bg-black px-2 py-1 text-xl text-white underline decoration-transparent transition-colors duration-150 ease-in-out hover:decoration-white"
        onClick={() => {}}
      >
        Clear
      </button>
      <button
        type="submit"
        className="default-font-bold min-w-[100px] bg-black px-2 py-1 text-xl text-white underline decoration-transparent transition-colors duration-150 ease-in-out hover:decoration-white"
      >
        Submit
      </button>
    </div>
  );
}
