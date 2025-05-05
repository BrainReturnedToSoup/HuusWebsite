import { DisplayedNotesProps_Interface } from "./DisplayedNotes_Interface";

export function DisplayedNotes({}: DisplayedNotesProps_Interface) {
  return (
    <p className="lato-medium mb-4 p-2 text-end text-base text-neutral-400 underline">
      Note: fields annotated with * are required
    </p>
  );
}
