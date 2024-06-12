import React from "react";
import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="nav-footer-container">
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
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
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
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="icon-div">
              <i className="bi bi-globe"></i>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="second-nav-footer">
              <ul className="nav-footer">
                <li>
                  <a href="#">Politica de privacidad</a>
                </li>
                <li>
                  <a href="#">Terminos de uso</a>
                </li>
                <li>
                  <a href="#">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#">Sobre nuestro proyecto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
