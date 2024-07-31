import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import Features from "./features/Features";
import Faq from "./faq/Faq";
import CallToAction from "./call-to-action/CallToAction";

export default function Main() {
  const screenWidth: number = useSelector(
    (state: RootState) => state.deviceScreen.width,
  );

  return (
    <main>
      <Features screenWidth={screenWidth} />
      <Faq screenWidth={screenWidth} />
      <CallToAction screenWidth={screenWidth} />
    </main>
  );
}
