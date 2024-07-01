import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Select, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../Hooks/api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1); // estado para la cantidad q se selecciona

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        console.log("Fetched products:", products);
        const selectedProduct = products.find(
          (prod) => prod.id === parseInt(id)
        );
        console.log("Selected product:", selectedProduct);
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error(`Product with id ${id} not found`);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
  
    fetchData();
  }, [id]);

  const handleChangeQty = (event) => {
    setSelectedQty(event.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  if (typeof product.pic !== "string") {
    console.error(`Product picture for product id ${id} is not a string`);
    return <div>Error: Product picture is not available.</div>;
  }

  const handleAddToCart = () => {
    // agrega el producto al carrito con la cantidad que seleccioné
    dispatch(addItem({ ...product, quantity: selectedQty }));
  };

  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={import.meta.env.VITE_IMG_URL + product.pic}
            alt="Product"
            style={{
              maxWidth: "100%",
              maxHeight: "500px",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Precio: ${product.price}
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            style={{ marginTop: "1rem" }}
          >
            Cantidad:
            <Select value={selectedQty} onChange={handleChangeQty}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </Typography>
          <div style={{ marginTop: "1rem" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#e93d3a",
                color: "white",
                width: "100%",
              }}
            >
              Comprar
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#e93d3a",
                color: "white",
                width: "100%",
                marginTop: "8px",
              }}
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
