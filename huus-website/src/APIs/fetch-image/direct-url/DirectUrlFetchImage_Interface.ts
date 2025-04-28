import { FetchImageConfig } from "../FetchImage_Interface";

// declaring this way instead of say 'typeof Image.constructor' provides the necessary
// LSP visibility to ensure proper use of the constructor, because the above declaration only
// returns a generic 'Function' type rather than all the semantics of the 'Image' constructor API
export type ImageConstructor = typeof Image;

// the schema for which the supplied context object should adhere to.
// you can change this here if you want to enforce new values.
export interface DirectUrlContext {}

export interface DirectUrlFetchImageConfig
  extends FetchImageConfig<DirectUrlContext> {
  imageConstructor: ImageConstructor;
  imageSrc: string;
  imageHeight: number;
  imageWidth: number;

  // inherits the property member 'context' with the type 'DirectUrlContext' due to generic declaration in 'FetchImageConfig<>'
}
