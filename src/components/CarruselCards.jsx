import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselWithCards = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <Row>
          {productos.slice(0, 5).map(producto => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className="card">
                <img src={producto.imgUrl} className="card-img-top" alt={producto.name} />
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {productos.slice(5, 10).map(producto => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className="card">
                <img src={producto.imgUrl} className="card-img-top" alt={producto.name} />
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
      {/* Agrega más Carousel.Items según sea necesario */}
    </Carousel>
  );
};

export default CarouselWithCards;
