import {
  SECTION_TITLE,
  SECTION_DESC,
} from "../../../../enums/pages/+root/-main/features";

import DefaultPreface from "../../../../components/util/preface/DefaultPreface";

export default function Preface() {
  return <DefaultPreface title={SECTION_TITLE} desc={SECTION_DESC} />;
}
