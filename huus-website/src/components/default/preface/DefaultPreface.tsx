interface DefaultPrefaceProps {
  title: string;
  desc: string;
}

export default function DefaultPreface({ title, desc }: DefaultPrefaceProps) {
  return (
    <div className="flex max-w-[760px] flex-col items-center px-4 py-14 lg:py-20">
      <h3 className="lato-medium mb-6 w-full text-center text-4xl lg:text-5xl">
        {title}
      </h3>
      <p className="lato-medium w-full text-center text-xl leading-loose">
        {desc}
      </p>
    </div>
  );
}
