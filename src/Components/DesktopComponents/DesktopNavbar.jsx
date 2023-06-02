// import "../css/desktop.styles.css";
import logo from "../../Images/logo.png"; // TODO: CHOOSE WHICH LOGO TO USE
import Logo2 from "../../Images/logo2.svg";
import HamburgerMenu from "../../Images/hamburger.svg";

const DesktopNavbar = () => {
  return (
    <div className="DesktopNavbar">
      <img src={Logo2} alt="Logo" className="DesktopLogo" />
      <div className="DesktopMenu">MENU</div>
      <img
        src={HamburgerMenu}
        alt="Hamburger Menu"
        className="DesktopHamburgerMenu"
      />
    </div>
  );
};

export default DesktopNavbar;
