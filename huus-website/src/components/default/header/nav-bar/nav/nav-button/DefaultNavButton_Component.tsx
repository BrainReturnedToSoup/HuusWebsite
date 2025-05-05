import { DefaultNavButtonProps_Interface } from "./DefaultNavButton_Interface";

function DefaultNavButton({ navButton }: DefaultNavButtonProps_Interface) {
  return (
    <li className="h-[55px]">
      <a
        href={navButton.url}
        className="default-font-bold box-border flex h-full items-center justify-center border-black px-4 py-1 text-[1.1rem] text-white transition-colors duration-150 ease-in-out hover:border-y-[1px] hover:bg-white hover:text-black active:bg-white active:text-black"
      >
        {navButton.text}
      </a>
    </li>
  );
}

export { DefaultNavButton };
