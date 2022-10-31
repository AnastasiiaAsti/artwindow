import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close">
            <span class="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="logo float-left m-0"
            >
              Art Window
            </Link>

            <ul className="js-clone-nav d-none d-lg-inline-noone text-left site-menu">
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pages" style={{ textDecoration: "none" }}>
                  Pages
                </Link>
              </li>
              <li>
                <Link to="/portfolio" style={{ textDecoration: "none" }}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/elements" style={{ textDecoration: "none" }}>
                  Elements
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contacts" style={{ textDecoration: "none" }}>
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
