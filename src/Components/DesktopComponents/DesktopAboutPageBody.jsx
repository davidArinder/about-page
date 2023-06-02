import Apple from "../../Images/apple.jpg";
import Pyramid from "../../Images/Pyramid.png";
import {
  about,
  ourVision,
  ourValues,
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
  sixthText,
  seventhText,
} from "../../utils/Text";

const DesktopAboutPageBody = () => {
  return (
    <div className="DesktopAboutPageBody">
      <div className="DesktopAbout">{about}</div>
      <img src={Apple} alt="Apple" className="DesktopApple" />
      <div className="DesktopMaskOne"></div>
      <div className="DesktopFirstText">{firstText}</div>
      <div className="DesktopSecondText">{secondText}</div>
      <div className="DesktopThirdText">{thirdText}</div>
      <div className="DesktopFourthText">{fourthText}</div>
      <div className="DesktopVision">{ourVision}</div>
      <div className="DesktopMaskTwo"></div>
      <img src={Pyramid} alt="Pyramid" className="DesktopPyramid" />
      <div className="DesktopValues">{ourValues}</div>
      <div className="DesktopFifthText">{fifthText}</div>
      <div className="DesktopSixthText">{sixthText}</div>
      <div className="DesktopSeventhText">{seventhText}</div>
    </div>
  );
};

export default DesktopAboutPageBody;
