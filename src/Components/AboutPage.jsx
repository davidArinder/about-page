import DesktopNavbar from "./DesktopComponents/DesktopNavbar";
import MobileNavbar from "./MobileComponents/MobileNavbar";
import DesktopAboutPageBody from "./DesktopComponents/DesktopAboutPageBody";
import MobileAboutPageBody from "./MobileComponents/MobileAboutPageBody";
import "../CSS/desktop.styles.css";
import "../CSS/mobile.styles.css";
import "../CSS/global.css";
import { useMediaQuery } from "react-responsive";

const AboutPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="Container">
      {isDesktopOrLaptop && (
        <div className="DesktopAboutPage">
          <DesktopNavbar />
          <DesktopAboutPageBody />
        </div>
      )}
      {isTabletOrMobile && (
        <div className="MobileAboutPage">
          <MobileNavbar />
          <MobileAboutPageBody />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
