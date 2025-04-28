import DefaultPreface from "../../../../components/util/preface/DefaultPreface";

export const TITLE = `Get Fit with Confidence!`;

export const DESC = `We've all been there-feeling lost, unsure of technique, worried about being judged, 
and having trouble actually 'sticking with it'. But what if getting fit could be fun, supportive, and guaranteed
 to bringresults? Well you're in luck, that's exactly what we offer!`;

export default function Preface() {
  return <DefaultPreface title={TITLE} desc={DESC} />;
}
