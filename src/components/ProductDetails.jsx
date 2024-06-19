import React, { useState } from 'react';
import { Grid, Typography, Button, Select, MenuItem } from '@mui/material';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedCuotas, setSelectedCuotas] = useState(1);
  const [selectedQty, setSelectedQty] = useState(1); 
  const product = {
    name: 'Nombre del Producto',
    price: 999.99,
    images: [
      '/img/CORSAIRH100i.png',
      '/img/RogStrix.png',
      '/img/ssd970EVO.webp',
      '/img/Rm850x.png',
      '/img/Razerblackwidow.png',
    ],
  };

  const handleChangeImage = (index) => {
    setSelectedImage(index);
  };

  const handleChangeQty = (event) => {
    setSelectedQty(event.target.value); 
  };

  return (
    <div className='container'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={product.images[selectedImage]} alt="Product" style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Precio: ${product.price}
          </Typography>
      
          <Typography variant="body2" gutterBottom style={{ marginTop: '1rem' }}>
            Cantidad:
            <Select value={selectedQty} onChange={handleChangeQty}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={3}>2</MenuItem>
            <MenuItem value={6}>3</MenuItem>
            <MenuItem value={12}>4</MenuItem>
          </Select>
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Thumbnail ${index}`}
                style={{
                  width: '50px',
                  height: '50px',
                  marginRight: '0.5rem',
                  cursor: 'pointer',
                  border: index === selectedImage ? '2px solid blue' : 'none',
                }}
                onClick={() => handleChangeImage(index)}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#e93d3a',
                color: 'white',
                width: '100%',
              }}
            >
              Comprar
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#e93d3a',
                color: 'white',
                width: '100%',
                marginTop: '10px',
              }}
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
