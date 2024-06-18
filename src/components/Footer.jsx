import React from "react";
import "../Footer.css"; 

const Footer = () => (
  <footer className="page-footer font-small pt-4 text-light ">
    <div className=" text-center text-md-left">
      <div className="row m-0">
        <div className="col-md-4 mt-md-0 mt-3 d-flex flex-column align-items-center align-md-start">
          <h5 className="text-uppercase">¡Gracias por Visitarnos!</h5>
          <div className="icons-footer d-flex justify-content-center">
            <i className="bi bi-facebook icon "> </i>
            <i className="bi bi-twitter-x icon "></i>
            <i className="bi bi-youtube icon "></i>
            <i className="bi bi-instagram icon "></i>
            <i className="bi bi-tiktok icon"></i>
          </div>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-4 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="footer-link">
                Pagina principal
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

        <div className="col-md-4 mb-md-0 mb-3">
          <ul className="list-unstyled">
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
    <div className="footer-copyright text-center py-3">
      <p className="mb-0">© 2024 Copyright ZonaGamer</p>
    </div>
  </footer>
);

export default Footer;
