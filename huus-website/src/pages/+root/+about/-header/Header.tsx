import DefaultHeader from "../../../../components/default/header/DefaultHeader_Component";

import backdropImage from "../../../../assets/about-header-background-image-lg.jpeg";

import { defaultLogger } from "../../../../logging/logger/default/DefaultLogger_Instance";
import { createInvocationId } from "../../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";
import { domBodyRepository } from "../../../../state/repositories/DOM/DomBodyRepository_Instance";

import {
  DEFAULT_NAV_BUTTON_ID,
  DEFAULT_NAV_BUTTON_TEXT,
  DEFAULT_NAV_BUTTON_URL,
} from "../../../../enum/navigation/default/DefaultNavButtons_Enum";

const NAV_BUTTONS = [
  {
    id: DEFAULT_NAV_BUTTON_ID.TO_ROOT,
    text: DEFAULT_NAV_BUTTON_TEXT[DEFAULT_NAV_BUTTON_ID.TO_ROOT],
    url: DEFAULT_NAV_BUTTON_URL[DEFAULT_NAV_BUTTON_ID.TO_ROOT],
  },
  {
    id: DEFAULT_NAV_BUTTON_ID.TO_SERVICES,
    text: DEFAULT_NAV_BUTTON_TEXT[DEFAULT_NAV_BUTTON_ID.TO_SERVICES],
    url: DEFAULT_NAV_BUTTON_URL[DEFAULT_NAV_BUTTON_ID.TO_SERVICES],
  },
  {
    id: DEFAULT_NAV_BUTTON_ID.TO_CONTACT,
    text: DEFAULT_NAV_BUTTON_TEXT[DEFAULT_NAV_BUTTON_ID.TO_CONTACT],
    url: DEFAULT_NAV_BUTTON_URL[DEFAULT_NAV_BUTTON_ID.TO_CONTACT],
  },
  {
    id: DEFAULT_NAV_BUTTON_ID.TO_LEGAL,
    text: DEFAULT_NAV_BUTTON_TEXT[DEFAULT_NAV_BUTTON_ID.TO_LEGAL],
    url: DEFAULT_NAV_BUTTON_URL[DEFAULT_NAV_BUTTON_ID.TO_LEGAL],
  },
  {
    id: DEFAULT_NAV_BUTTON_ID.TO_MEDIA,
    text: DEFAULT_NAV_BUTTON_TEXT[DEFAULT_NAV_BUTTON_ID.TO_MEDIA],
    url: DEFAULT_NAV_BUTTON_URL[DEFAULT_NAV_BUTTON_ID.TO_MEDIA],
  },
];

export default function Header() {
  return (
    <DefaultHeader
      logger={defaultLogger}
      createInvocationId={createInvocationId}
      heroImageSrc={backdropImage}
      heroImageAlt={"some pictures of myself"}
      navButtons={NAV_BUTTONS}
      domBodyRepository={domBodyRepository}
      componentUsageSource={"about-page"}
    />
  );
}
