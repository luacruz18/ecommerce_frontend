import React from "react";
import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="nav-footer">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="icons-footer">
              <li>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-twitter-x"></i>
              </li>
              <li>
                <i className="bi bi-youtube"></i>
              </li>
              <li>
                <i className="bi bi-instagram" />
              </li>
              <li>
                <i className="bi bi-tiktok"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <hr className="my-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="nav-footer second-nav-footer">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
