import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Referee from "../components/referee/Referee";
import PersonalDetails from "../components/personalDetails/PersonalDetails";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <Profession />
      </div>
      <div className="bg-white">
        <Experience />
      </div>
      <div className="bg-soft-white">
        <Education />
      </div>
      <div className="bg-white">
        <PersonalDetails />
      </div>
      <Referee />
      <Contact />
    </div>
  );
};

export default Home;
