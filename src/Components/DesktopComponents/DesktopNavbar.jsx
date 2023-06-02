import logo from "../../Assets/Images/logo.svg";
import hamburgerMenu from "../../Assets/Images/hamburger.svg";

const DesktopNavbar = () => {
  return (
    <div className="DesktopNavbar">
      <img src={logo} alt="Logo" className="DesktopLogo" />
      <div className="DesktopMenu">MENU</div>
      <img
        src={hamburgerMenu}
        alt="Hamburger Menu"
        className="DesktopHamburgerMenu"
      />
    </div>
  );
};

export default DesktopNavbar;
