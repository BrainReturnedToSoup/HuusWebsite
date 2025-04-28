interface DefaultPrefaceProps {
  title: string;
  desc: string;
}

export default function DefaultPreface({ title, desc }: DefaultPrefaceProps) {
  return (
    <div className="flex max-w-[760px] flex-col items-center justify-center px-4 py-14 lg:py-20">
      <h3 className="lato-bold mb-6 text-pretty break-words text-center text-4xl">
        {title}
      </h3>
      <p className="lato-medium text-pretty break-words text-center text-xl leading-loose">
        {desc}
      </p>
    </div>
  );
}
