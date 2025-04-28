import DefaultPreface from "../../../../../components/util/preface/DefaultPreface";

const title = "Affordable, Convenient, Effective!";
const desc = `Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum
        suspendisse faucibus sociosqu ultrices tincidunt maecenas ullamcorper
        proin. Diam metus nec neque magna eros. Facilisi varius suscipit feugiat
        lacus; curabitur fermentum curabitur.`;

export default function Preface() {
  return (
    <div className="flex items-center justify-center border-b-[1px] border-neutral-400">
      <DefaultPreface title={title} desc={desc} />
    </div>
  );
}
