function Link({ linkInfo }) {
  return (
    <li className="mb-3 sm:mb-2">
      <a href={linkInfo.link} className="block px-2 hover:underline">
        <p className="lato-medium flex h-[48px] min-w-[48px] justify-center text-xl text-neutral-700 first-line:items-center sm:text-base md:h-fit md:w-fit md:p-2">
          {linkInfo.text}
        </p>
      </a>
    </li>
  );
}

function NavColumns({ navColumns }) {
  return (
    <>
      {navColumns.map((column, index) => {
        return (
          <div className="flex flex-col items-center justify-center">
            <h2 className="lato-bold mb-6 text-2xl text-neutral-700 underline sm:text-xl">
              {column.title}
            </h2>
            <ul className="mx-6 mb-6 flex flex-col items-center justify-center md:mx-0">
              {column.links.map((linkInfo) => (
                <Link linkInfo={linkInfo} key={index} />
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default function FooterNav({ navColumns }) {
  return (
    <div className="flex min-h-[185px] w-full flex-wrap justify-around border-b-2 border-neutral-400 px-2 pt-6 md:px-16">
      <NavColumns navColumns={navColumns} />
    </div>
  );
}
