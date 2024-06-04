import Carousel from "react-bootstrap/Carousel";
import "../App.css";

const IndividualIntervalsExample = () => {
  return (
    <div className= "main-container">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "uno.jpg"} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "uno.jpg"} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img" src={import.meta.env.VITE_IMG_URL + "uno.jpg"} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    </div>
  );
};

export default IndividualIntervalsExample;
