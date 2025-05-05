import { useEffect, useRef, useState } from "react";

import { FetchImage_Interface } from "../../../APIs/fetch-image/FetchImage_Interface";
import { directUrlFetchImageFactory } from "../../../APIs/fetch-image/direct-url/DirectUrlFetchImageFactory_Instance";
import {
  DefaultHeaderProps_Interface,
  FetchImageContext,
} from "./DefaultHeader_Interface";

import { DefaultHeaderLogKeys_Enum } from "./DefaultHeader_Enum";

import { NavBar } from "./nav-bar/DefaultNavBar_Component";

export default function DefaultHeader({
  logger: headerInstanceLogger,
  createInvocationId,

  navButtons,

  heroImageSrc,
  heroImageAlt,

  domBodyRepository,

  componentUsageSource,
}: DefaultHeaderProps_Interface) {
  // the 'useRef' state is transient along rerenders of a component but does not cause rerenders when you do change it, and will be GCed when the underlying
  // component does a proper unmount. Then, you only need to manage references to the event handlers on the image fetching instance,
  // which is done via proper usage of 'useEffect'. The reason this is done, is so that the underlying image fetching is reused across
  // rerenders, but scrapped on component unmount. It also does not assume anything beyond the event-driven APIs exposed as it can
  // be configured to work with react.
  const transientComponentState = useRef({
    currImageSrc: "" as string,
    fetchImageInstance: null as FetchImage_Interface<FetchImageContext> | null,
  });

  const [fetchImageOnSuccess, setFetchImageOnSuccess] = useState(false);
  const [fetchImageOnFailure, setFetchImageOnFailure] = useState(false);
  const [fetchImageOnAbort, setFetchImageOnAbort] = useState(false);

  useEffect(() => {
    const useEffectCallbackInvocationId = createInvocationId();

    if (transientComponentState.current.currImageSrc !== heroImageSrc) {
      // reset all the necessary state to allow a new image to be fetched along the
      // changed src. using 'useRef()' will prevent rerenders here otherwise found when using 'useState'

      transientComponentState.current.currImageSrc = heroImageSrc;
      transientComponentState.current.fetchImageInstance = null;

      setFetchImageOnSuccess(false);
      setFetchImageOnFailure(false);
      setFetchImageOnAbort(false);
    }

    if (!transientComponentState.current.fetchImageInstance) {
      const invocationId = createInvocationId();

      const newFetchImageInstance = directUrlFetchImageFactory.newFetch(
        invocationId,

        {
          imageConstructor: Image,
          imageHeight: 100,
          imageWidth: 100,
          imageSrc: transientComponentState.current.currImageSrc,
          context: {},

          startingStrategy: ({
            logger: fetchInstanceLogger,
            instanceId,
            // context,
            start,
          }) => {
            fetchInstanceLogger
              .createNewLog()
              .addAttribute(
                DefaultHeaderLogKeys_Enum.INVOCATION_ID,
                useEffectCallbackInvocationId,
              )
              .addAttribute(
                DefaultHeaderLogKeys_Enum.COMPONENT_USAGE_SOURCE,
                componentUsageSource,
              )
              .addAttribute(
                DefaultHeaderLogKeys_Enum.FETCH_INSTANCE_ID,
                instanceId,
              )
              .addAttribute(
                DefaultHeaderLogKeys_Enum.FETCH_EVENT_TYPE,
                "starting-strategy",
              )
              .commit();

            start();
          },
        },
      );

      transientComponentState.current.fetchImageInstance =
        newFetchImageInstance;
    }

    // should not be null up to this point.
    transientComponentState.current.fetchImageInstance!.setHandlerOnSuccess(
      ({
        logger: fetchInstanceLogger,
        instanceId,
        //  context
      }) => {
        fetchInstanceLogger
          .createNewLog()
          .addAttribute(
            DefaultHeaderLogKeys_Enum.INVOCATION_ID,
            useEffectCallbackInvocationId,
          )
          .addAttribute(
            DefaultHeaderLogKeys_Enum.COMPONENT_USAGE_SOURCE,
            componentUsageSource,
          )
          .addAttribute(DefaultHeaderLogKeys_Enum.FETCH_INSTANCE_ID, instanceId)
          .addAttribute(
            DefaultHeaderLogKeys_Enum.FETCH_EVENT_TYPE,
            "on-success",
          )
          .commit();

        // to prevent redundant rerenders if flag already true.
        if (!fetchImageOnSuccess) setFetchImageOnSuccess(true);
      },
    );
    transientComponentState.current.fetchImageInstance!.setHandlerOnFailure(
      ({
        logger: fetchInstanceLogger,
        instanceId,
        // context,
        // retry,
        exit,
      }) => {
        exit(); // exit out of the image fetching attempt rather than retrying a new attempt.

        fetchInstanceLogger
          .createNewLog()
          .addAttribute(
            DefaultHeaderLogKeys_Enum.INVOCATION_ID,
            useEffectCallbackInvocationId,
          )
          .addAttribute(
            DefaultHeaderLogKeys_Enum.COMPONENT_USAGE_SOURCE,
            componentUsageSource,
          )
          .addAttribute(DefaultHeaderLogKeys_Enum.FETCH_INSTANCE_ID, instanceId)
          .addAttribute(
            DefaultHeaderLogKeys_Enum.FETCH_EVENT_TYPE,
            "on-failure",
          )
          .commit();

        // to prevent redundant rerenders if flag already true.
        if (!fetchImageOnFailure) setFetchImageOnFailure(true);
      },
    );
    transientComponentState.current.fetchImageInstance!.setHandlerOnAbort(
      ({
        logger: fetchInstanceLogger,
        instanceId,
        // context
      }) => {
        fetchInstanceLogger
          .createNewLog()
          .addAttribute(
            DefaultHeaderLogKeys_Enum.INVOCATION_ID,
            useEffectCallbackInvocationId,
          )
          .addAttribute(
            DefaultHeaderLogKeys_Enum.COMPONENT_USAGE_SOURCE,
            componentUsageSource,
          )
          .addAttribute(DefaultHeaderLogKeys_Enum.FETCH_INSTANCE_ID, instanceId)
          .addAttribute(DefaultHeaderLogKeys_Enum.FETCH_EVENT_TYPE, "on-abort")
          .commit();

        // to prevent redundant rerenders if flag already true.
        if (!fetchImageOnAbort) setFetchImageOnAbort(true);
      },
    );

    return () => {
      // clear any references to the fetch image instance just in case the component is being unmounted to make the image fetching instance valid for GC.
      // if its just a rerender, the useState in the component will stay transient, and thus the fetchImageInstance
      // won't be GCed. Thus, on the next useEffect the handlers will be remounted with fresh references to the setters of state.
      if (transientComponentState.current.fetchImageInstance) {
        transientComponentState.current.fetchImageInstance.clearHandlerOnSuccess();
        transientComponentState.current.fetchImageInstance.clearHandlerOnFailure();
        transientComponentState.current.fetchImageInstance.clearHandlerOnAbort();
      }
    };
  }, [heroImageSrc, heroImageAlt]);

  return (
    <header className={`h-[765px] bg-black`}>
      {/*
          the entirety of the elements in the header have to be positioned either using relative or absolute properties
          to achieve proper layering behaviors when trying to stretch the image to be the same size as the header element itself. Hence, its why there
          is an immediate wrapper div within header, but not directly on the header itself.
        */}

      <NavBar
        logger={headerInstanceLogger}
        createInvocationId={createInvocationId}
        navButtons={navButtons}
        domBodyRepository={domBodyRepository}
        componentUsageSource={componentUsageSource}
      />
      {/*
          Shift the div below upwards to match the offset otherwise caused by the nav bar (nav bar is 85px tall).
          This achieves a proper overlap on the nav bar, ensuring the image represents the entire header basically
          */}
      <div className="relative top-[-85px] h-full w-full">
        {!fetchImageOnSuccess && !fetchImageOnAbort && !fetchImageOnFailure
          ? null
          : null}

        {fetchImageOnSuccess ? (
          <img
            src={heroImageSrc}
            alt={heroImageAlt}
            className="h-full w-full object-cover"
          ></img>
        ) : null}

        {fetchImageOnFailure || fetchImageOnAbort ? null : null}
      </div>
    </header>
  );
}
