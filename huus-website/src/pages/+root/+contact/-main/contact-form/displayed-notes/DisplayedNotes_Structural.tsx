import { DisplayedNotesProps_Interface } from "./DisplayedNotes_Interface";

export function DisplayedNotes({}: DisplayedNotesProps_Interface) {
  return (
    <p className="default-font-regular mb-4 p-2 text-end text-sm text-neutral-500 underline">
      Note: fields annotated with * are required
    </p>
  );
}
