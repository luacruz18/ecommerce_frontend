import React from 'react';
import "../App.css";


const Collage = () => {

  return (
    <div className="collage">
      <div className="collage-item special-offers">
        <img className="background-img" src={import.meta.env.VITE_IMG_URL + "collagebig.jpg"} alt="Ofertas Especiales" />
        <div className="overlay">
          <h2>OFERTAS ESPECIALES</h2>
          <p>Consulte las mejores ofertas de la semana en nuestros dispositivos más potentes</p>
          <button>COMPRAR AHORA</button>
        </div>
      </div>
      <div className="collage-item small-form-designs">
        <img className="background-img" src={import.meta.env.VITE_IMG_URL + "collage2.jpg"} alt="Diseños de Pequeño Formato" />
        <div className="overlay">
          <h2>DISEÑOS DE PEQUEÑO FORMATO</h2>
          <p>Diseñe un nuevo y potente PC Mini-ITX con los nuevos chasis Airflow 2000D, junto con los ventiladores AF120 RGB SLIM y la fuente de alimentación SF-L Series.</p>
          <button>COMPRAR AHORA</button>
        </div>
      </div>
      <div className="collage-item only-corsair">
        <img className="background-img" src={import.meta.env.VITE_IMG_URL + "collage3.jpg"} alt="Solo en Corsair" />
        <div className="overlay">
          <h2>SOLO EN CORSAIR</h2>
          <p>Lo mejor, solo aquí.</p>
          <button>COMPRAR AHORA</button>
        </div>
      </div>
    </div>
  );
};

export default Collage;