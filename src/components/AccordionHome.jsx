import Accordion from 'react-bootstrap/Accordion';
import '../styles/AccordionHome.css';

function AccordionHome() {
  return (
    <div className='accordion pt-5 pb-5'>
      <div className='container'>
        <div className='pb-4'>
          <h2 className='preguntas text-center text-light'>PREGUNTAS FRECUENTES</h2>
        </div>
        <Accordion className='accordion-custom'>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='accordion-header'>¿Qué es una PC gamer y por qué debería considerar comprar una?</Accordion.Header>
            <Accordion.Body className='accordion-body'>
              Una PC gamer es una computadora diseñada específicamente para ofrecer un rendimiento óptimo en videojuegos. Está equipada con componentes de alta gama que permiten ejecutar juegos exigentes con gráficos y velocidades fluidas, brindando una experiencia de juego superior a la de una PC convencional.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className='accordion-header'>¿Qué especificaciones debería buscar en una PC gamer?</Accordion.Header>
            <Accordion.Body className='accordion-body'>
              Las especificaciones clave incluyen el procesador, la tarjeta gráfica, la cantidad de RAM y el almacenamiento. Busque procesadores de múltiples núcleos, tarjetas gráficas de última generación, al menos 8 GB de RAM y opciones de almacenamiento SSD para tiempos de carga más rápidos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className='accordion-header'>¿Cuál es la diferencia entre una PC gamer y una consola de videojuegos como PlayStation o Xbox?</Accordion.Header>
            <Accordion.Body className='accordion-body'>
              Una PC gamer ofrece flexibilidad y capacidad de actualización. Puedes personalizar los componentes para mejorar el rendimiento con el tiempo, mientras que las consolas tienen especificaciones fijas y no pueden actualizarse fácilmente.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className='accordion-header'>¿Es necesario tener conocimientos avanzados de informática para usar una PC gamer?</Accordion.Header>
            <Accordion.Body className='accordion-body'>
              No es necesario ser un experto, pero es útil tener cierto conocimiento básico para mantener la PC y realizar actualizaciones menores. Muchas tiendas ofrecen soporte técnico y guías para ayudarte.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className='accordion-header'>¿Qué software adicional necesito para aprovechar al máximo mi PC gamer?</Accordion.Header>
            <Accordion.Body className='accordion-body'>
              Dependiendo de tus preferencias, podrías beneficiarte de software de optimización de juegos, controladores actualizados para tus componentes y posiblemente software de transmisión si planeas transmitir o grabar tus sesiones de juego.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className='accordion-header'>¿Cómo puedo asegurarme de que mi PC gamer tenga una buena ventilación y no se sobrecaliente?</Accordion.Header>
            <Accordion.Body className='accordion-body'>
              Es importante asegurarse de que el gabinete tenga suficientes ventiladores y espacio para la circulación de aire. Además, puedes considerar la refrigeración líquida para componentes clave como la CPU si planeas realizar overclocking.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className='accordion-header'>¿Qué pasa si necesito actualizar mi PC gamer en el futuro?</Accordion.Header>
            <Accordion.Body className='accordion-body'>
              La mayoría de los componentes de una PC gamer pueden actualizarse fácilmente. Puedes mejorar la tarjeta gráfica, agregar más RAM o cambiar el procesador según tus necesidades y presupuesto en el futuro.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionHome;
