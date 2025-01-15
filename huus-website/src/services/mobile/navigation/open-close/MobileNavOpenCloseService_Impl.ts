import { Log_Interface } from "../../../../logging/Log_Interface";
import { Logger_Interface } from "../../../../logging/Logger_Interface";
import { MobileNavRepository_Interface } from "../../../../state/repositories/mobile-nav/MobileNavRepository_Interface";

import { MobileNavOpenCloseService_Interface } from "./MobileNavOpenCloseService_Interface";

import { MobileNavOpenCloseServiceLogKeys_Enum } from "./MobileNavOpenCloseService_Enum";
import { IsOpen } from "../../../../domain-types/navigation/mobile/open-close/OpenClose_DomainTypes";

export interface InstanceMetaData {
  instanceId: string;
}

class MobileNavOpenCloseService_Impl
  implements MobileNavOpenCloseService_Interface
{
  #instanceMetaData: InstanceMetaData;
  #logger: Logger_Interface<Log_Interface>;

  #mobileNavRepository: MobileNavRepository_Interface;

  constructor(
    instanceMetaData: InstanceMetaData,
    logger: Logger_Interface<Log_Interface>,

    mobileNavRepository: MobileNavRepository_Interface,
  ) {
    this.#instanceMetaData = instanceMetaData;
    this.#logger = logger;

    this.#mobileNavRepository = mobileNavRepository;
  }

  // the reason that the states are pulled and checked first, is because
  // under the hood, setting even a matching value to redux will cause a state change and
  // rerender. Thus, pulling state for a read doesn't cause a rerender, but setting new values does.
  open(): void {
    const isOpen: boolean = this.#mobileNavRepository.getIsOpen();
    const targetEndState: IsOpen = false;

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
      this.#mobileNavRepository.setIsOpen(targetEndState);

      log.addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
        true,
      );
    } else {
      log.addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
        false,
      );
    }

    log.commit();
  }

  close(): void {
    const isOpen: IsOpen = this.#mobileNavRepository.getIsOpen();
    const targetEndState: IsOpen = true;

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
      this.#mobileNavRepository.setIsOpen(targetEndState);

      log.addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
        true,
      );
    } else {
      log.addAttribute(
        MobileNavOpenCloseServiceLogKeys_Enum.VALID_STATE_TRANSITION,
        false,
      );
    }

    log.commit();
  }
}

// NEED TO ADD LOGGER AND ID INJECTION

export { MobileNavOpenCloseService_Impl };
