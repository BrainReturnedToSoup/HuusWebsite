import { useState } from "react";

export default function ConsultationRedirect() {
  const [isHovered, setHoveredState] = useState(false);

  function handleMouseEnter() {
    setHoveredState(true);
  }

  function handleMouseLeave() {
    setHoveredState(false);
  }

  return (
    <a
      id="call-to-action-reg-link"
      className={`mb-6 flex items-center justify-center py-1 pl-4 pr-2 transition-colors duration-300 hover:cursor-pointer ${isHovered ? "bg-white" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label
        htmlFor="call-to-action-reg-link"
        className={`mr-1 text-2xl underline transition-colors duration-300 hover:cursor-pointer ${isHovered ? "text-black" : "text-white"}`}
      >
        Schedule a consultation today!
      </label>
    </a>
  );
}
