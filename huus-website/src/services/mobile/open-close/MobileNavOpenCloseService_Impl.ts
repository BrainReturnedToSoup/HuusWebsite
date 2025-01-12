import { MobileNavRepository_Interface } from "../../../state/repositories/mobile-nav/MobileNavRepository_Interface";
import { MobileNavOpenCloseService_Interface } from "./MobileNavOpenCloseService_Interface";

class MobileNavOpenCloseService_Impl
  implements MobileNavOpenCloseService_Interface
{
  #mobileNavRepository: MobileNavRepository_Interface;

  constructor(mobileNavRepository: MobileNavRepository_Interface) {
    this.#mobileNavRepository = mobileNavRepository;
  }

  // the reason that the states are pulled and checked first, is because 
  // under the hood, setting even a matching value to redux will cause a state change and
  // rerender. Thus, pulling state for a read doesn't cause a rerender, but setting new values does.
  open(): void {
    const isOpen: boolean = this.#mobileNavRepository.getIsOpen();

    if (!isOpen) {
      this.#mobileNavRepository.setIsOpen(false);
    }
  }

  close(): void {
    const isOpen: boolean = this.#mobileNavRepository.getIsOpen();

    if (isOpen) {
      this.#mobileNavRepository.setIsOpen(true);
    }
  }
}

// NEED TO ADD LOGGER AND ID INJECTION

export { MobileNavOpenCloseService_Impl };
