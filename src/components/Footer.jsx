import React from "react";

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12">
            <div className="widget">
              <h3>About</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live.
              </p>
            </div>
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
        </div>
      </div>
    </div>
  );
}
