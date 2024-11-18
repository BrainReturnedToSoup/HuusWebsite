import { MobileNavOpenCloseServiceInterface } from "./mobileNavOpenCloseInterface";
import { mobileNavRepository } from "../../state/repositories/mobile-nav/MobileNavImpl";
import { MobileNavRepositoryInterface } from "../../state/repositories/mobile-nav/MobileNavInterface";

class MobileNavOpenCloseService implements MobileNavOpenCloseServiceInterface {
  #mobileNavRepository: MobileNavRepositoryInterface;
  #resetDelayMs: number;

  constructor(
    mobileNavRepository: MobileNavRepositoryInterface,
    resetDelayMs: number,
  ) {
    this.#mobileNavRepository = mobileNavRepository;
    this.#resetDelayMs = resetDelayMs;
  }

  #setToggleNotDisabledDelayed() {
    setTimeout(
      () => this.#mobileNavRepository.setIsToggleDisabled(false),
      this.#resetDelayMs,
    );
  }

  open(): boolean {
    if (this.#mobileNavRepository.getIsToggleDisabled()) return false;

    this.#mobileNavRepository.setIsOpen(true);
    this.#mobileNavRepository.setIsToggleDisabled(true);

    this.#setToggleNotDisabledDelayed();

    return true;
  }

  close(): boolean {
    if (this.#mobileNavRepository.getIsToggleDisabled()) return false;

    this.#mobileNavRepository.setIsOpen(false);
    this.#mobileNavRepository.setIsToggleDisabled(true);

    this.#setToggleNotDisabledDelayed();

    return true;
  }
}

// 500ms toggle disable reset is a good value just to prevent spamming
const singletonForAppUse = new MobileNavOpenCloseService(
  mobileNavRepository,
  500,
);

const mobileNavOpenCloseService = singletonForAppUse;

export { MobileNavOpenCloseService, mobileNavOpenCloseService };
