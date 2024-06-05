import Carousel from "react-bootstrap/Carousel";
import "../App.css";

const IndividualIntervalsExample = () => {
  return (
    <div className= "main-container">
    <Carousel>
      <Carousel.Item interval={1100}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "uno.jpg"} alt="" />
        <Carousel.Caption>
             {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1100}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "uno.jpg"} alt="" />
        <Carousel.Caption>
        {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1100}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "uno.jpg"} alt="" />
        <Carousel.Caption>
           {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1100}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "uno.jpg"} alt="" />
        <Carousel.Caption>
        {/* aca iria los botones y eso */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default IndividualIntervalsExample;
