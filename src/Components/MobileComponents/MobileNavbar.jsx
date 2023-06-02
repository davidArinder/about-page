// import "../css/mobile.styles.css";
import HamburgerMenu from "../../Images/hamburger.svg";

const MobileNavbar = () => {
  return (
    <div className="MobileNavbar">
      <div className="MobileMenu">MENU</div>
      <img
        src={HamburgerMenu}
        alt="Hamburger Menu"
        className="MobileHamburgerMenu"
      />
    </div>
  );
};

export default MobileNavbar;
