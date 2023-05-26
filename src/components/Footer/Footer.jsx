import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="col-lg-12">
        <div className="widget">
          <h3>Connect with us</h3>
          <ul className="social list-unstyled">
            <li>
              <a href="#">
                <span className="icon-facebook"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon-twitter"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-instagram"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-dribbble"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-linkedin"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
