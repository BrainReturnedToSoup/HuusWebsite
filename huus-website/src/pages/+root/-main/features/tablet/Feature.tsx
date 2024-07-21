interface FeatureProps {
  title: string;
  desc: string;
  backgroundImageProp: string;
  index: number;
  redirect: {
    route: string;
    positionY: number;
  };
}

export default function Feature({
  title,
  desc,
  backgroundImageProp,
  index,
  redirect,
}: FeatureProps) {
  return (
    <a
      className={`feature-mobile-container-sm-grid my-6 grid h-[300px] w-full flex-col gap-x-4 hover:cursor-pointer`}
      id={`feature-mobile-redirect-${index}`}
      href={redirect.route}
    >
      <div
        className="feature-mobile-container-sm-image-cell aspect-square h-full w-full"
        style={{
          backgroundImage: `url(${backgroundImageProp})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="feature-mobile-container-sm-heading-cell flex h-full w-full items-center p-3">
        <h2 className="text-4xl text-white">{title}</h2>
      </div>
      <div
        className={`feature-mobile-container-sm-desc-cell mb-3 h-full w-full sm:p-3`}
      >
        <p className="text-white sm:text-xl">{desc}</p>
      </div>
      <div
        className={`feature-mobile-container-sm-redirect-cell flex h-full w-full items-center justify-end pr-6`}
      >
        <label
          htmlFor={`feature-mobile-redirect-${index}`}
          className="text-white underline sm:text-xl"
        >
          Details
        </label>
      </div>
    </a>
  );
}
