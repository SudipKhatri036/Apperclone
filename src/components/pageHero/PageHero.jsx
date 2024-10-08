import "./PageHero.css";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";

function PageHero({ pageHeroHead }) {
  return (
    <section className="page-hero">
      <div className="page-hero-cont">
        <div className="hero-content">
          <h2 className="heading-secondary">{pageHeroHead}</h2>
          <nav>
            <ul className="page__link-list">
              <li>
                <Link to="/" className="page__link page__link-icon">
                  <MdOutlineHome />
                </Link>
              </li>
              <FaAngleRight />
              <li>
                <Link className="page__link">{pageHeroHead}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-cont">
          <svg
            id="hero-wave-divider"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1879.8 203"
            enableBackground="new 0 0 1879.8 203"
            xmlSpace="preserve"
          >
            <path
              className="wave-divider"
              fill="#F6F4FE"
              d="M0,0c6.1,7.9,11.9,16,18.3,23.6C34.6,43,53.6,59.4,74.3,73.8c49.4,34.4,104.4,55.8,162.5,69.8
      c32.8,7.9,66,12.9,99.5,16.4c44,4.6,88.1,4.7,132.2,3.5c26.6-0.7,53.1-3.4,79.6-5.5c26.9-2.2,53.7-4.7,80.5-7.3
      c25.3-2.4,50.7-5.1,76-7.6c24.7-2.5,49.3-4.8,74-7.4c27.6-2.8,55.3-5.8,82.9-8.6c21.5-2.2,43.1-4.3,64.6-6.2
      c22.7-2.1,45.4-4.1,68.1-5.8c16.6-1.3,33.2-2.6,49.8-3.1c25.1-0.8,50.3-1.3,75.4-1.1c56.5,0.5,111.6,9.1,165.5,26.7
      c56.6,18.5,114.4,32.4,173.2,41.9c29.2,4.7,58.7,7.9,88.1,11.4c31.7,3.7,63.5,3.9,95.3,2.7c44.3-1.7,87.9-8.1,129.4-24.7
      c44.4-17.8,79.7-46,100.6-90.1c2.9-6.2,5.4-12.5,8.1-18.8c0,47.7,0,95.3,0,143c-626.6,0-1253.2,0-1879.8,0C0,135.3,0,67.6,0,0z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
