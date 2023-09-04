import "./header.css";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h3>Jyothi Santoshi Karuturi</h3>
        <p>
          I'm a computer science graduate student who is deeply enthusiastic
          about Full Stack Development. I possess a strong drive for crafting
          user-friendly interfaces coupled with a backend that can easily scale.
          Furthermore, I have a keen interest in delving into the realm of data
          structures and algorithms. I enjoy taking on intricate problems
          directly, aiming to provide technically robust solutions that operate
          with optimal effectiveness.
        </p>
        <div className="header__cta">
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
