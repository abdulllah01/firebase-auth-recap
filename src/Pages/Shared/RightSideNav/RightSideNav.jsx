import LoginWith from "./LoginWith";
import QZone from "./QZone";
import SocialNetwork from "./SocialNetwork";
import Sponsor from "./Sponsor";

const RightSideNav = () => {
  return (
    <div className="p-3 ">
      <LoginWith />
      <SocialNetwork />
      <QZone />
      <Sponsor />
    </div>
  );
};

export default RightSideNav;
