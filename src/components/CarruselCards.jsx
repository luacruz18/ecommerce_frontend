import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CarouselWithControls = () => {
  const [productos, setProductos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedProducts = chunkArray(productos, 5); // Agrupar los productos en bloques de 4

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='explore-container'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} pause={false} indicators={false}>
        {chunkedProducts.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {chunk.map((producto, index) => (
                <div key={index} className="col-xs-6 col-sm-6 col-md-3 col-lg-2">
                  <div className="card product-card">
                    <div className="img-wrapper"><img src={producto.img} className="card-img-top" alt={producto.name} /></div>
                    <div className="card-body">
                      <h5 className="card-title">{producto.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWithControls;
