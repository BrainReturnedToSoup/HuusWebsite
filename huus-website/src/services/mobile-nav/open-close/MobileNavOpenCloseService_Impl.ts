import { MobileNavRepository_Interface } from "../../../state/repositories/mobile-nav/MobileNavRepository_Interface";
import { MobileNavOpenCloseService_Interface } from "./MobileNavOpenCloseService_Interface";

class MobileNavOpenCloseService_Impl
  implements MobileNavOpenCloseService_Interface
{
  #mobileNavRepository: MobileNavRepository_Interface;

  constructor(mobileNavRepository: MobileNavRepository_Interface) {
    this.#mobileNavRepository = mobileNavRepository;
  }

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
