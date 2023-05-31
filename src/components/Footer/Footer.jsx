import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="col-lg-12">
        <div className="widget">
          <h3>Connect with us</h3>
          <ul className="social list-unstyled">
            <li>
              <Link to="/">
                <span className="icon-facebook"></span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span class="icon-twitter"></span>
              <Link>
            </li>
            <li>
              <Link to="/">
                <span className="icon-instagram"></span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="icon-dribbble"></span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="icon-linkedin"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
