export interface Redirect {
  route: string;
}

export interface Feature {
  title: string;
  desc: string;
  backgroundImage: string;
  icon: string;
  redirect: Redirect;
  key: number;
}

export interface FeatureProps_Interface {
  feature: Feature;
}
