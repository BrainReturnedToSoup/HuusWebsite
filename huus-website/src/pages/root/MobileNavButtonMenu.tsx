import mobileMenuStateActions from "../../business-logic/mobileMenu";

function MobileNavButtonMenu() {
  return (
    <div className="fixed z-10 h-dvh w-full bg-black">
      <div>
        <button onClick={mobileMenuStateActions.closeMenu}>
          <img className="text-white" alt="Close menu"></img>
          <p className="text-white">Close</p>
        </button>
      </div>
      <div>links go here</div>
    </div>
  );
}

export default MobileNavButtonMenu;
