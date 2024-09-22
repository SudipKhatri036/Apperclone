import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./Header.css";

function Header() {
  return (
    <header className="header container">
      <a className="logo">
        <img src="./logo-n.svg" alt="Logo Image" />
      </a>
      <nav className="nav">
        <ul className="nav__lists">
          <li>
            <a href="#" className="nav__links">
              Home <MdOutlineKeyboardArrowDown />
            </a>

            <ul className="sub-menu">
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav__links">
              Mega Menu <MdOutlineKeyboardArrowDown />
            </a>
            {/* <ul className="sub-menu">
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
              <li>
                <a href="#" className="sub-menu__links">
                  Home Default
                </a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href="#" className="nav__links">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nav__links">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav__links">
              Pages <MdOutlineKeyboardArrowDown />
              <ul className="sub-menu">
                <li>
                  <a href="#" className="sub-menu__links">
                    Home Default
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu__links">
                    Home Default
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu__links">
                    Home Default
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu__links">
                    Home Default
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu__links">
                    Home Default
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu__links">
                    Home Default
                  </a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href="#" className="nav__links">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="nav__links">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav__links nav__btn">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn--menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
