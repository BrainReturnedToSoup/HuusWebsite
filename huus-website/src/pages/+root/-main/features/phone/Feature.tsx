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
      className={`my-6 w-full flex-col hover:cursor-pointer`}
      id={`feature-mobile-redirect-${index}`}
      href={redirect.route}
    >
      <div
        className="mb-4 aspect-square w-full"
        style={{
          backgroundImage: `url(${backgroundImageProp})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex h-14 w-full items-center justify-center bg-black bg-opacity-85">
          <h2 className="text-3xl text-white">{title}</h2>
        </div>
      </div>

      <div className={`mb-3 p-4`}>
        <p className="text-xl text-white">{desc}</p>
      </div>
      <div className={`flex items-center justify-end pr-6`}>
        <label
          htmlFor={`feature-mobile-redirect-${index}`}
          className="text-xl text-white underline"
        >
          Details
        </label>
      </div>
    </a>
  );
}
