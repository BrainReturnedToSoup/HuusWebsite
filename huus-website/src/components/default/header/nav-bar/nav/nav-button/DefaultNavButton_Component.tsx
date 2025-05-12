import { DefaultNavButtonProps_Interface } from "./DefaultNavButton_Interface";

function DefaultNavButton({
  id,
  text,
  url,
  index,
}: DefaultNavButtonProps_Interface) {
  let appliedLinkStyle = `default-font-bold box-border flex h-full items-center 
  justify-center px-4 py-1 border-l-[1px] border-l-transparent text-[1.1rem] text-white transition-colors
  duration-150 ease-in-out hover:bg-white hover:text-black hover:border-x-black active:bg-white active:text-black decoration-transparent hover:decoration-black underline`;

  if (index === 0) {
    // if it's the first button in the list, starting from left-to-right
    // if this is the first iteration, make the button white with a black transition and full white borders all around
    appliedLinkStyle = `default-font-bold box-border flex h-full items-center justify-center border-x-[1px]  border-l-black border-r-transparent
           px-4 py-1 text-[1.1rem] bg-white text-black transition-colors duration-150 ease-in-out hover:bg-black hover:text-white hover:border-r-white hover:decoration-white decoration-transparent underline`;
  }

  return (
    <li className="h-[55px]">
      <a href={url} className={appliedLinkStyle}>
        {text}
      </a>
    </li>
  );
}

export { DefaultNavButton };
