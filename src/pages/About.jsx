import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiMysql } from "react-icons/si";
import "../styles/About.css";

const TeamMemberCard = ({ name, title, description, imgSrc, linkedinUrl }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="col">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle text-secondary my-1">{title}</h6>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clicked ? "clicked" : ""}
            onClick={() => setClicked(true)}
          >
            <FaLinkedin className="mx-2" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

function About() {
  return (
    <>
      <Navbar />
      <div className="container-lg mt-4">
        <h1 className="text-center">Sobre este proyecto</h1>
        <div className="row">
          <hr />
          <div className="col-lg-12">
            <p className="introduction-text text-center">
              ¡Bienvenidos a ZonaGamer!, un innovador proyecto de ecommerce creado por estudiantes de Anima, donde la creatividad y la pasión por la programación se unen en cada línea de código. En ZonaGamer, entendemos que el gaming no es solo un pasatiempo, sino una pasión y un estilo de vida. Hemos utilizado tecnologías modernas como Node.js, React, GitHub, JavaScript, CSS3, HTML5, Redux y MySQL para crear una experiencia única. Nuestro equipo está comprometido con la excelencia y trabaja incansablemente para superar los desafíos técnicos y aprender nuevas habilidades. Nos enorgullece nuestro esmero en la atención al detalle y la calidad de nuestro código, asegurándonos de que cada función y característica funcione perfectamente. Explora nuestra plataforma y descubre el resultado de nuestra dedicación y trabajo en equipo. ZonaGamer es una representación de nuestra pasión por el desarrollo de software y el gaming. ¡Gracias por acompañarnos en este emocionante viaje hacia el futuro del comercio digital y el desarrollo tecnológico!
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <FaNodeJs className="mx-2" size={50} />
          <FaReact className="mx-2" size={50} />
          <FaGithub className="mx-2" size={50} />
          <IoLogoJavascript className="mx-2" size={50} />
          <FaCss3Alt className="mx-2" size={50} />
          <FaHtml5 className="mx-2" size={50} />
          <SiRedux className="mx-2" size={50} />
          <SiMysql className="mx-2" size={50} />
        </div>

        <div className="row">
          <h2 className="text-center mt-5">Nuestro Equipo</h2>
          <hr />
          <div className="row row-cols-1 row-cols-lg-4 g-4 px-0 mt-0 mb-5 team-cards">
            <TeamMemberCard
              name="Micaela Reyes"
              title="Co-founder"
              description="Observa nuestro compromiso como equipo de proporcionar a cada persona en nuestra plataforma global la tecnología que puede ayudarles a avanzar."
              imgSrc="\img\FotoMicaela.png"
              linkedinUrl="https://www.linkedin.com/in/-micaelareyes/"
            />
            <TeamMemberCard
              name="Santiago Cozzi"
              title="Co-founder"
              description="Nuestro equipo se dedica a asegurar que todos en nuestra plataforma global cuenten con la tecnología necesaria para progresar."
              imgSrc="\img\8804887.jpg"
              linkedinUrl="https://www.linkedin.com/in/santiago-cozzi-silva/"
            />
            <TeamMemberCard
              name="Luana Cruz"
              title="Co-founder"
              description="Nos comprometemos a ofrecer a todos los usuarios de nuestra plataforma global las herramientas tecnológicas que les impulsen hacia adelante."
              imgSrc="\img\FotoLuana.png"
              linkedinUrl="https://www.linkedin.com/in/luana-cruz-19737619b/"
            />
            <TeamMemberCard
              name="Sofia Salaberry"
              title="Co-founder"
              description="En nuestro equipo nos esforzamos por garantizar que todos en nuestra plataforma global tengan acceso a la tecnología que les permita avanzar."
              imgSrc="\img\FotoSofia.png"
              linkedinUrl="https://www.linkedin.com/in/sof%C3%ADa-salaberry-12050a289/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
