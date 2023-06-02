import hamburgerMenu from "../../Assets/Images/hamburger.svg";

const MobileNavbar = () => {
  return (
    <div className="MobileNavbar">
      <div className="MobileMenu">MENU</div>
      <img
        src={hamburgerMenu}
        alt="Hamburger Menu"
        className="MobileHamburgerMenu"
      />
    </div>
  );
};

export default MobileNavbar;
