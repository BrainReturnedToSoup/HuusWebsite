import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { GeneralErrorMessagePopupProps_Interface } from "./GeneralErrorMessagePopup_Interface";

import {
  DomBodyOverflowX_Enum,
  DomBodyOverflowY_Enum,
} from "../../../../../../state/repositories/DOM/DomBodyRepository_Enum";

import "./GeneralErrorMessagePopup_Style.css";

import { AppStoreRootState } from "../../../../../../state/react-redux/store";

import errorSymbol from "../../../../../../assets/images/error-symbol-exclamation-point-white.svg";
import { useDispatch } from "react-redux";
import { contactFormSliceActions } from "../../../../../../state/react-redux/slices/contact-form/contactForm";

export function GeneralErrorMessagePopup({
  logger,
  createInvocationId,
  componentUsageSource,

  domBodyRepository,
}: GeneralErrorMessagePopupProps_Interface) {
  const componentLifecycleId = createInvocationId();

  const generalFormErrorMessage = useSelector(
    (state: AppStoreRootState) => state.contactForm.generalFormError,
  );

  useEffect(() => {
    if (generalFormErrorMessage) {
      domBodyRepository.setOverflowY(
        componentLifecycleId,

        DomBodyOverflowY_Enum.HIDDEN,
      );

      domBodyRepository.setOverflowX(
        componentLifecycleId,

        DomBodyOverflowX_Enum.HIDDEN,
      );
    } else {
      domBodyRepository.setOverflowY(
        componentLifecycleId,

        DomBodyOverflowY_Enum.AUTO,
      );

      domBodyRepository.setOverflowX(
        componentLifecycleId,

        DomBodyOverflowX_Enum.AUTO,
      );
    }

    return () => {
      domBodyRepository.setOverflowY(
        componentLifecycleId,

        DomBodyOverflowY_Enum.AUTO,
      );

      domBodyRepository.setOverflowX(
        componentLifecycleId,

        DomBodyOverflowX_Enum.AUTO,
      );
    };
  }, [generalFormErrorMessage]);

  const gempRef = useRef(null);
  const focusableElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const currFocusPos = useRef<number | null>(null);

  useEffect(() => {
    if (gempRef.current) {
      const divElement = gempRef.current as HTMLElement;

      focusableElementsRef.current =
        divElement.querySelectorAll("button, a, p");
    }

    return () => {
      focusableElementsRef.current = null;
    };
  });

  function handleTabTrap(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      event.stopPropagation();

      if (!focusableElementsRef.current) return;

      if (currFocusPos.current === null) {
        // start at the second tabbable, because 'tabIndex={1}' for the first button/link will be naturally selected
        const startingsPos = 1;

        currFocusPos.current = startingsPos;

        const elementToFocus = focusableElementsRef.current.item(startingsPos);

        elementToFocus.focus();

        return;
      }

      let newFocusPos = null;

      if (event.shiftKey) {
        // for moving backwards in focus

        if (currFocusPos.current === 0) {
          // if current focus position exists means something in the mobile nav was already
          // focused, so focus on the next item in the list.

          newFocusPos = focusableElementsRef.current.length - 1;
        } else {
          newFocusPos = currFocusPos.current - 1;
        }
      } else {
        // for moving forward in focus

        if (currFocusPos.current !== focusableElementsRef.current.length - 1) {
          // if current focus position exists means something in the mobile nav was already
          // focused, so focus on the next item in the list.

          newFocusPos = currFocusPos.current + 1;
        } else {
          newFocusPos = 0;
        }
      }

      // the default position is going to be 0 on either 'tab' or 'shift+tab', the conditions above
      // accounting for the modular nature of focus traversal. Not using modulo is a micro-op.

      currFocusPos.current = newFocusPos;

      const newElementToFocus = focusableElementsRef.current.item(newFocusPos);

      newElementToFocus.focus();
    }
  }

  const dispatch = useDispatch();

  function handleAcknowledgement(e: React.SyntheticEvent) {
    e.stopPropagation();

    dispatch(contactFormSliceActions.setGeneralFormError(""));
  }

  return (
    <div
      className={`${generalFormErrorMessage ? "block" : "hidden"} contact-form-gemp-backdrop-blur fixed left-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        ref={gempRef}
        onKeyDown={handleTabTrap}
        className="contact-form-gemp-opacity flex max-h-[360px] min-h-[196px] w-[364px] flex-col bg-white shadow-xl"
      >
        <div className="flex basis-0 flex-col items-center justify-center bg-red-600 px-3 pb-4 pt-5">
          <img
            src={errorSymbol}
            className="mb-4 aspect-square max-h-[42px] max-w-[42px]"
          ></img>
          <h1
            className={`default-font-bold flex items-center justify-center text-[1.25rem] text-white`}
          >
            An Error Has Occurred
          </h1>
        </div>
        <p className="mb-2 mt-4 flex min-h-[96px] grow basis-full items-center justify-center overflow-y-scroll text-pretty px-6 py-2 text-center text-sm text-neutral-500">
          {generalFormErrorMessage}
        </p>

        <div className="flex basis-0 items-center justify-center p-2">
          <button
            className={`default-font-bold w-full bg-neutral-500 px-2 py-1 text-[1.15rem] text-white`}
            tabIndex={1}
            onClick={handleAcknowledgement}
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
}
