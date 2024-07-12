import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-3">
          <h5 className="text-uppercase">¡Gracias por Visitarnos!</h5>
          <ul className="icons-footer">
            <li>
              <i className="bi bi-facebook icon"></i>
            </li>
            <li>
              <i className="bi bi-twitter-x icon"></i>
            </li>
            <li>
              <i className="bi bi-youtube icon"></i>
            </li>
            <li>
              <i className="bi bi-instagram icon"></i>
            </li>
            <li>
              <i className="bi bi-tiktok icon"></i>
            </li>
          </ul>
        </div>

        <div className="col-md-4 mb-3">
          <ul className="nav-footer">
            <li>
              <a href="#!" className="footer-link">
                Página principal
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Novedades
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Contacto
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Ayuda
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 mb-3">
          <ul className="second-nav-footer">
            <li>
              <a href="#!" className="footer-link">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center text-muted">
      <p className="mb-0">© 2024 Copyright ZonaGamer</p>
    </div>
  </footer>
);

export default Footer;
