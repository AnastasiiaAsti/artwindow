import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <h1 className="logo float-left m-0">Art Window</h1>

            <ul className="js-clone-nav d-none d-lg-inline-noone text-left site-menu">
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/metmuseum" style={{ textDecoration: "none" }}>
                  Met Museum
                </Link>
              </li>

              <li>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <a
              href=""
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-block"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
