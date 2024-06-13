import Carousel from "react-bootstrap/Carousel";
import "../App.css";

const IndividualIntervalsExample = () => {
  return (
    <div className="main-container">
      <Carousel>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={import.meta.env.VITE_IMG_URL + "Primer_Carrusel (1).jpg"}
            alt=""
          />
          <Carousel.Caption>
            {/* aca iria los botones y eso */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={import.meta.env.VITE_IMG_URL + "Segundo_Imágen_Carrusel.jpg"}
            alt=""
          />
          <Carousel.Caption>
            {/* aca iria los botones y eso */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={import.meta.env.VITE_IMG_URL + "Tercer_Imágen_Carrusel.jpg"}
            alt=""
          />
          <Carousel.Caption>
            {/* aca iria los botones y eso */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={
              import.meta.env.VITE_IMG_URL + "Cuarta_Imágen_Carrusel (1).jpg"
            }
            alt=""
          />
          <Carousel.Caption>
            {/* aca iria los botones y eso */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default IndividualIntervalsExample;
