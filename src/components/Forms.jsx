import React, { useState } from "react";
import { Button, Col, Form, Row, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";

function Forms() {
  const [billingToCompany, setBillingToCompany] = useState(false);
  const handleBillingToCompanyChange = (e) => {
    setBillingToCompany(e.target.checked);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let subtotal = 0;
  let tax = 0;
  let total = 0;

  if (cartItems.length > 0) {
    subtotal = cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 1;

      return total + itemPrice * itemQuantity;
    }, 0);

    tax = 1.22 * subtotal;
    total = subtotal + tax;
  }

  const handleOrder = async () => {
    console.log("handleOrder");
    try {
      await axios.post("http://localhost:3000/orders", {
        data: "hola",
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Swal.fire({
        title: "Tu compra se ha realizado de manera exitosa.",
        text: "¡Te esperamos pronto!",
        icon: "success",
        confirmButtonColor: "#E93D3A",
        color: "Black",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lo sentimos, al parecer ocurrió un error!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      console.error(err);
    }
  };

  const handleFinalizarClick = async () => {
    if (!token) {
      navigate('/login');
      return;
    }

    await handleOrder();
  };

  return (
    <Container className="Forms shopping">
      <Row className="mt-3 pt-4">
        <Col md={6}>
          <Card className="form-card">
            <Card.Header className="datos-card" as="h4">
              Datos de Facturación
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su apellido" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="tel" placeholder="Ingrese su teléfono" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="direccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su dirección" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="codigoPostal">
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su código postal" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="indicaciones">
                  <Form.Label>Indicaciones</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Indique alguna instrucción adicional" />
                </Form.Group>

                <Button variant="primary" type="submit" className="button">
                  Guardar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="form-card">
            <Card.Header className="datos-card" as="h4">
              Detalle del pedido
            </Card.Header>
            <Card.Body>
              {/* Detalle del pedido */}
              {cartItems.map((item) => (
                <div key={item.id} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={import.meta.env.VITE_IMG_URL + item.pic}
                        className="img-fluid rounded-start"
                        alt={item.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Precio: ${item.price}</p>
                        {item.quantity > 1 && (
                          <p className="card-text">Cantidad: {item.quantity}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Resumen del Pedido</h5>
                  <p className="card-text">Subtotal: ${subtotal.toFixed(2)}</p>
                  <p className="card-text">Impuestos: ${tax.toFixed(2)}</p>
                  <h3 className="card-text">Total: ${total.toFixed(2)}</h3>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Botón FINALIZAR */}
          <Button
            className="col-6 button mt-3 w-25 btn-sm"
            variant="secondary"
            type="button"
            onClick={handleFinalizarClick}
          >
            FINALIZAR
          </Button>

          {/* Botón de PayPal */}
          <PayPalButton
            amount={total.toFixed(2)} 
            onSuccess={(details, data) => {
             
              Swal.fire({
                title: "Pago completado",
                text: "¡Gracias por tu compra!",
                icon: "success",
                confirmButtonColor: "#E93D3A",
                color: "Black",
              });
            }}
            options={{
              clientId: "TU_CLIENT_ID_DE_PAYPAL",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Forms;
