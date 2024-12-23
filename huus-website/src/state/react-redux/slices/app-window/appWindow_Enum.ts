export enum AppWindowChangeSources {
  MANUAL = "MANUAL",
  LISTENER = "LISTENER",
  NONE = "NONE", // starting state basically. Don't want to make the dev make assumptions of certain conditions
}
