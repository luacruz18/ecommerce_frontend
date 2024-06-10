import Carousel from "react-bootstrap/Carousel";
import "../App.css";

const IndividualIntervalsExample = () => {
  return (
    <div className= "main-container">
    <Carousel>
      <Carousel.Item className="main-carousel-item" interval={2000}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "PrimerCarrusel.jpg"} alt="" />
        <Carousel.Caption>
             {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="main-carousel-item" interval={2000}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "SegundoCarrusel.jpg"} alt="" />
        <Carousel.Caption>
        {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="main-carousel-item" interval={2000}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "TercerCarrusel.jpg"} alt="" />
        <Carousel.Caption>
           {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="main-carousel-item" interval={900}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "CuartaCarrusel.jpg"} alt="" />
        <Carousel.Caption>
        {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default IndividualIntervalsExample;
