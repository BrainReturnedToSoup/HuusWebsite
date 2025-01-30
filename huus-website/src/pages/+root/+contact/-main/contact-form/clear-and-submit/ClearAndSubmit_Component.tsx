import { ClearAndSubmitProps_Interface } from "./ClearAndSubmit_Interface";

export function ClearAndSubmit({}: ClearAndSubmitProps_Interface) {
  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        className="lato-bold min-w-[125px] bg-black px-4 py-2 text-xl text-white"
        onClick={() => {}}
      >
        Clear
      </button>
      <button
        type="submit"
        className="lato-bold min-w-[125px] bg-black px-4 py-2 text-xl text-white"
      >
        Send
      </button>
    </div>
  );
}
