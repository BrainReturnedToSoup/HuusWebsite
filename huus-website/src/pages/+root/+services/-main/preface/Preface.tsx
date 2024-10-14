import DefaultPreface from "../../../../../components/default/preface/DefaultPreface";

const title = "Affordable, Convenient, Effective! this";
const desc = `Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum
        suspendisse faucibus sociosqu ultrices tincidunt maecenas ullamcorper
        proin. Diam metus nec neque magna eros. Facilisi varius suscipit feugiat
        lacus; curabitur fermentum curabitur.`;

export default function Preface() {
  return (
    <div className="border-b-2 border-neutral-300 flex items-center justify-center">
      <DefaultPreface title={title} desc={desc} />
    </div>
  );
}
