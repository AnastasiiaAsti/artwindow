import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <a href="index.html" className="logo float-left m-0">
              Art Window
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-noone text-left site-menu"></ul>

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
