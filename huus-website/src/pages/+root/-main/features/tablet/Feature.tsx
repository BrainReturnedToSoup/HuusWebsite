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
      className={`my-2 flex w-full hover:cursor-pointer p-2`}
      id={`feature-mobile-redirect-${index}`}
      href={redirect.route}
    >
      <div
        className="aspect-square h-[275px]"
        style={{
          backgroundImage: `url(${backgroundImageProp})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col p-4">
        <h2 className="text-3xl text-white mb-2">{title}</h2>
        <p className="text-xl text-white">{desc}</p>
        <div className={`flex h-full w-full items-center justify-end pr-6`}>
          <label
            htmlFor={`feature-mobile-redirect-${index}`}
            className="text-center text-xl text-white underline"
          >
            Learn more
          </label>
        </div>
      </div>
    </a>
  );
}
