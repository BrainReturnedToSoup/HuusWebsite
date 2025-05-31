import { DisplayedNotesProps_Interface } from "./DisplayedNotes_Interface";

export function DisplayedNotes({}: DisplayedNotesProps_Interface) {
  return (
    <p className="default-font-regular text-end text-sm text-neutral-500 underline">
      Note: fields annotated with * are required
    </p>
  );
}
