import DefaultHeader from "../../../components/default/header/DefaultHeader_Component";

import { defaultLogger } from "../../../logging/logger/default/DefaultLogger_Instance";
import { createInvocationId } from "../../../logging/invocation-id/InvocationIdFactory_LambdaImpl";
import { domBodyRepository } from "../../../state/repositories/DOM/DomBodyRepository_Instance";

import rootPageBackdropImage from "../../../assets/images/main-backdrop-image.webp";

import {
  DEFAULT_NAV_BUTTON_ID,
  DEFAULT_NAV_BUTTON_TEXT,
  DEFAULT_NAV_BUTTON_URL,
} from "../../../enum/navigation/default/DefaultNavButtons_Enum";

const NAV_BUTTONS = [
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
    id: DEFAULT_NAV_BUTTON_ID.TO_ABOUT,
    text: DEFAULT_NAV_BUTTON_TEXT[DEFAULT_NAV_BUTTON_ID.TO_ABOUT],
    url: DEFAULT_NAV_BUTTON_URL[DEFAULT_NAV_BUTTON_ID.TO_ABOUT],
  },
  {
    id: DEFAULT_NAV_BUTTON_ID.TO_MEDIA,
    text: DEFAULT_NAV_BUTTON_TEXT[DEFAULT_NAV_BUTTON_ID.TO_MEDIA],
    url: DEFAULT_NAV_BUTTON_URL[DEFAULT_NAV_BUTTON_ID.TO_MEDIA],
  },
];

function Header() {
  return (
    <DefaultHeader
      logger={defaultLogger}
      createInvocationId={createInvocationId}
      navButtons={NAV_BUTTONS}
      heroImageSrc={rootPageBackdropImage}
      heroImageAlt={"Man deadlifting"}
      domBodyRepository={domBodyRepository}
      componentUsageSource={"root-page"}
    />
  );
}

export { Header, NAV_BUTTONS };
