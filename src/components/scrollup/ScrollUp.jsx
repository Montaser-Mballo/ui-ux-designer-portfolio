import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  const handleScrollToTop = (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling to the top
    });
  };

  return (
    <a href="#" className="scrollup" onClick={handleScrollToTop}>
      <HiOutlineArrowSmUp className="scrollup__icon" />
    </a>
  );
}

export default ScrollUp;
