import { Log_Interface } from "../../../../logging/Log_Interface";
import { Logger_Interface } from "../../../../logging/Logger_Interface";
import { MobileNavRepository_Interface } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import {
  MobileNavOpenCloseService_Interface,
  ToggleTimeoutTimeInMs,
} from "./MobileNavOpenCloseService_Interface";

import {
  MobileNavOpenCloseServiceLogKeys_Enum,
  TransitionFailureReason_Enum,
} from "./MobileNavOpenCloseService_Enum";

import {
  IsOpen,
  IsToggleDisabled,
} from "../../../../domain-types/navigation/mobile/open-close/OpenClose_DomainTypes";

export interface InstanceMetaData {
  instanceId: string;
}

class MobileNavOpenCloseService_Impl
  implements MobileNavOpenCloseService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #mobileNavRepository: MobileNavRepository_Interface;
  #toggleTimeoutTimeInMs: ToggleTimeoutTimeInMs;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

    mobileNavRepository: MobileNavRepository_Interface,
    toggleTimeoutTimeInMs: ToggleTimeoutTimeInMs,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#mobileNavRepository = mobileNavRepository;
    this.#toggleTimeoutTimeInMs = toggleTimeoutTimeInMs;
  }

  open(): void {
    const isOpen: IsOpen = this.#mobileNavRepository.getIsOpen();
    const isToggleDisabled: IsToggleDisabled =
      this.#mobileNavRepository.getIsToggleDisabled();

    const targetEndState: IsOpen = false;

    // base log attributes regardless of success or failure
    const log: Log_Interface = this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        "open",
      );

    if (!isOpen) {
      // means it's not open, now time to check if the toggling for open and closing the mobile nav is disabled

      if (!isToggleDisabled) {
        // free to make the necessary transition here, while also setting a timeout so that the toggle is disabled for
        // a small amount of time.

        this.#mobileNavRepository.setIsOpen(targetEndState);
        this.#mobileNavRepository.setIsToggleDisabled(true);

        setTimeout(() => {
          this.#mobileNavRepository.setIsToggleDisabled(false);
        }, this.#toggleTimeoutTimeInMs);

        log.addAttribute(
          MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
          true,
        );
      } else {
        // the mobile nav isn't open but toggling is currently disabled, but it should eventually be enabled once the associated timeout fires and flips the flag.

        log
          .addAttribute(
            MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
            false,
          )
          .addAttribute(
            MobileNavOpenCloseServiceLogKeys_Enum.REASON_FOR_TRANSITION_FAILURE,
            TransitionFailureReason_Enum.TOGGLE_DISABLED,
          );
      }
    } else {
      // means it's already open, so not a valid state transition, but not a full blown error.

      log
        .addAttribute(
          MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
          false,
        )
        .addAttribute(
          MobileNavOpenCloseServiceLogKeys_Enum.REASON_FOR_TRANSITION_FAILURE,
          TransitionFailureReason_Enum.ALREADY_OPEN,
        );
    }

    // the finalize the log
    log.commit();
  }

  close(): void {
    const isOpen: IsOpen = this.#mobileNavRepository.getIsOpen();
    const isToggleDisabled: IsToggleDisabled =
      this.#mobileNavRepository.getIsToggleDisabled();

    const targetEndState: IsOpen = true;

    // base log attributes regardless of success or failure
    const log: Log_Interface = this.#logger
      .createNewLog()
      .addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.INSTANCE_ID,
        this.#instanceMetaData.instanceId,
      )
      .addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.INVOKED_PUBLIC_METHOD,
        "close",
      );

    if (isOpen) {
      // means it's open, now time to check if the toggling for open and closing the mobile nav is disabled

      if (!isToggleDisabled) {
        // free to make the necessary transition here, while also setting a timeout so that the toggle is disabled for
        // a small amount of time.

        this.#mobileNavRepository.setIsOpen(targetEndState);
        this.#mobileNavRepository.setIsToggleDisabled(true);

        setTimeout(() => {
          this.#mobileNavRepository.setIsToggleDisabled(false);
        }, this.#toggleTimeoutTimeInMs);

        log.addAttribute(
          MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
          true,
        );
      } else {
        // the mobile nav is open but toggling is currently disabled, but it should eventually be enabled once the associated timeout fires and flips the flag.

        log
          .addAttribute(
            MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
            false,
          )
          .addAttribute(
            MobileNavOpenCloseServiceLogKeys_Enum.REASON_FOR_TRANSITION_FAILURE,
            TransitionFailureReason_Enum.TOGGLE_DISABLED,
          );
      }
    } else {
      // means its already not open, so not a valid state transition, but not a full blown error.

      log
        .addAttribute(
          MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
          false,
        )
        .addAttribute(
          MobileNavOpenCloseServiceLogKeys_Enum.REASON_FOR_TRANSITION_FAILURE,
          TransitionFailureReason_Enum.ALREADY_CLOSED,
        );
    }

    log.commit();
  }
}

// NEED TO ADD LOGGER AND ID INJECTION

export { MobileNavOpenCloseService_Impl };
