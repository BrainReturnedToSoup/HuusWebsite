import { Link } from "react-router-dom";
import { MobileNavButtonLogKeys_Enum } from "./MobileNavButton_Enum";
import { MobileNavButtonProps_Interface } from "./MobileNavButton_Interface";

export function MobileNavButton({
  logger,
  createInvocationId,

  navButton: navButtonInfo,
}: MobileNavButtonProps_Interface) {
  return (
    <li className="my-6">
      <Link
        onClick={(event) => {
          event.stopPropagation();

          const invocationIdOnNavigate = createInvocationId(); // no need to propagate, small easy gain in resource footprint

          logger
            .createNewLog()
            .addAttribute(
              MobileNavButtonLogKeys_Enum.INVOCATION_ID,
              invocationIdOnNavigate,
            )
            .addAttribute(
              MobileNavButtonLogKeys_Enum.INVOCATION_TYPE,
              "on-click-navigate",
            )
            .addAttribute(
              MobileNavButtonLogKeys_Enum.CURRENT_LINK_ID,
              navButtonInfo.id,
            )
            .addAttribute(
              MobileNavButtonLogKeys_Enum.NAVIGATING_TO,
              navButtonInfo.url,
            )
            .commit();
        }}
        to={navButtonInfo.url}
      >
        {navButtonInfo.text}
      </Link>
    </li>
  );
}
