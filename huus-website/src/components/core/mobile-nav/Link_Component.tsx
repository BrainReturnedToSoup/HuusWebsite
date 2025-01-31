import { useNavigate } from "react-router-dom";
import { MobileNavLinkLogKeys_Enum } from "./Link_Enum";
import { LinkProps_Interface } from "./Link_Interface";

export function Link({
  logger,
  createInvocationId,

  linkId,
  linkData,
}: LinkProps_Interface) {
  const invocationIdPremount = createInvocationId();

  logger
    .createNewLog()
    .addAttribute(MobileNavLinkLogKeys_Enum.SOURCE_COMPONENT, "link")
    .addAttribute(MobileNavLinkLogKeys_Enum.INVOCATION_ID, invocationIdPremount)
    .addAttribute(MobileNavLinkLogKeys_Enum.CURRENT_LINK_ID, linkId)
    .addAttribute(
      MobileNavLinkLogKeys_Enum.INVOCATION_TYPE,
      "component-pre-mount",
    )
    .commit();

  const navigate = useNavigate();

  return (
    <li className="my-6">
      <a
        onClick={(event) => {
          const invocationIdOnNavigate = createInvocationId();

          logger
            .createNewLog()
            .addAttribute(
              MobileNavLinkLogKeys_Enum.INVOCATION_ID,
              invocationIdOnNavigate,
            )
            .addAttribute(
              MobileNavLinkLogKeys_Enum.INVOCATION_TYPE,
              "on-click-navigate",
            )
            .addAttribute(MobileNavLinkLogKeys_Enum.CURRENT_LINK_ID, linkId)
            .addAttribute(
              MobileNavLinkLogKeys_Enum.NAVIGATING_TO,
              linkData.route,
            )
            .commit();

          event.stopPropagation(); // no need to propagate, small easy gain in resource footprint

          navigate(linkData.route);
        }}
      >
        {linkData.text}
      </a>
    </li>
  );
}
