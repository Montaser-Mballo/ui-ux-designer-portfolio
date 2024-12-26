import { HiOutlineDesktopComputer, } from "react-icons/hi";
// import { HiOutlineTerminal, } from "react-icons/hi";
// import { HiOutlineSparkles, } from "react-icons/hi";



const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <HiOutlineDesktopComputer className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 month</span>
      </div>
      {/* <div className="about__box">
        <HiOutlineTerminal className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3 Projects</span>
      </div> */}
      {/* <div className="about__box">
        <HiOutlineSparkles className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div> */}
    </div>
  );
}

export default Info;