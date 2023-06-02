import smallApple from "../../Images/smallApple.png";
import pyramid from "../../Images/pyramid.png";
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

const MobileAboutPageBody = () => {
  return (
    <div className="MobileAboutPageBody">
      <div className="MobileAbout">{about}</div>
      <img src={smallApple} alt="smallApple" className="MobileApple" />
      <div className="MobileMaskOne"></div>
      <div className="MobileFirstText">{firstText}</div>
      <div className="MobileSecondText">{secondText}</div>
      <div className="MobileVision">{ourVision}</div>
      <div className="MobileThirdText">{thirdText}</div>
      <div className="MobileFourthText">{fourthText}</div>
      <div className="MobileMaskTwo"></div>
      <img src={pyramid} alt="Pyramid" className="MobilePyramid" />
      <div className="MobileValues">{ourValues}</div>
      <div className="MobileFifthText">{fifthText}</div>
      <div className="MobileSixthText">{sixthText}</div>
      <div className="MobileSeventhText">{seventhText}</div>
    </div>
  );
};

export default MobileAboutPageBody;
