import Carousel from "react-bootstrap/Carousel";
import "../styles/App.css";

const IndividualIntervalsExample = () => {
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-container">
      <Carousel>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={import.meta.env.VITE_IMG_URL + "Primer_Carrusel (1).jpg"}
            alt=""
            draggable="false"
            onDragStart={handleDragStart}
          />
        </Carousel.Item>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={import.meta.env.VITE_IMG_URL + "SegundaImágenCarrusel.jpg"}
            alt=""
            draggable="false"
            onDragStart={handleDragStart}
          />
        </Carousel.Item>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={import.meta.env.VITE_IMG_URL + "Tercer_Imágen_Carrusel.jpg"}
            alt=""
            draggable="false"
            onDragStart={handleDragStart}
          />
        </Carousel.Item>
        <Carousel.Item className="main-carousel-item" interval={1100}>
          <img
            className="img"
            src={import.meta.env.VITE_IMG_URL + "Cuarta_Imágen_Carrusel (1).jpg"}
            alt=""
            draggable="false"
            onDragStart={handleDragStart}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default IndividualIntervalsExample;
