import React, { useState, useEffect, useContext, useRef } from "react";
import { Location } from "@reach/router";
import { Link } from "gatsby";
import Logo from "../Logo";
import "./nav.scss";
import menuItems from "../../data/nav.json";
import phone from '../../images/phone.svg';
import arrow from '../../images/arrow.svg'
import { StaticImage } from "gatsby-plugin-image"

const Navigation = props => {


  const [isSticky, setSticky] = useState(false);
  const [active, setAtive] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});

  const { location } = props;

  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= -100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);


  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const handleMenuToggle = () => setAtive(!active);

  // Only close nav if it is open
  const handleLinkClick = () => active && handleMenuToggle();
  // keyboard events
  const handleLinkKeyDown = ev => {
    if (ev.keyCode === 13) {
      active && handleMenuToggle();
    }
  };



  const navLinks = menuItems.topLevelItems.map((menuItem, index, to, className, children, ...props) => {
    const classes = (menuItem.megaMenu == true) ? "nav-item megaMenu" : "nav-item";
    return (
      <div key={index} className={classes}>

        <Link
          to={menuItem.url}
          className={`navlink ${menuItem.url === currentPath ? 'active' : ''
            } `}
          onClick={handleLinkClick}
          onKeyDown={handleLinkKeyDown}
          tabIndex={0}
          aria-label="Navigation"
          role="button"
          {...props}
        >
          {menuItem.displayText}
        </Link>
        {!!menuItem.submenu &&
          <div className="dropdown-content">
            <ul>
              {
                menuItem.submenu.map((item, index) => (
                  <li key={index} className={classes}>
                    <Link
                      to={item.url}
                      className={`subnavlink ${item.url === currentPath ? 'active' : ''
                        } `}
                      onClick={handleLinkClick}
                      onKeyDown={handleLinkKeyDown}
                      tabIndex={0}
                      aria-label="Navigation"
                      role="button"
                      {...props}
                    >
                  
                      <img src={item.icon} alt="nav icon" />
                      {item.displayText}
                    </Link>
                  </li>
                )
                )}
            </ul>
          </div>
        }
      </div>
    );
  });


  return (
    <nav id="navbar" className={`nav ${active ? "nav-active" : ""}`} ref={ref}>
      <div className="nav--container container">
        <div className="nav--section">
          <div className="logo-container">
            <Link
              to="/"
              onClick={handleLinkClick}
              onKeyDown={handleLinkKeyDown}
              tabIndex={0}
              aria-label="Navigation"
              role="button"
            >
              <Logo />
            </Link>
          </div>
          <div className="menu-links">
            {navLinks}
          </div>
          <div className="menu-right">
            <a href={`mailto${menuItems.contactNumber.displayText}`} className="btn__link" title="Call Us">
              <img src={phone} alt="Phone" />
              {menuItems.contactNumber.displayText}
            </a>

            <Link
              to={menuItems.navButton.url}
              tabIndex={0}
              role="button"
              className="button"
            >
              {menuItems.navButton.displayText}
              <span className="icon ic-arrow">
                <img src={arrow} alt="Right Arrow" />
              </span>
            </Link>

          </div>

          <button
            className={`nav--menubutton ${active ? 'active' : ''}`}
            onClick={handleMenuToggle}
            tabIndex={0}
            aria-label="Navigation"
          >

          </button>

        </div>
      </div>
    </nav>
  );
};

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
);
