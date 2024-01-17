import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useLocation } from 'react-router-dom';

const ProductCard = () => {
    const location = useLocation();
    const { modelo, image, precio } = location.state;

    const handleAgregarAlCarrito = () => {
        // Implementa la lógica para agregar el producto al carrito aquí
        console.log('Producto agregado al carrito:', location.state);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '1rem' }}>
            <Card style={{ width: '400px' }}>
                <CardMedia component="img" alt={modelo} height="450" image={image} />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {modelo}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Precio: ${precio}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<AddShoppingCartIcon />}
                        onClick={handleAgregarAlCarrito}
                        style={{ marginTop: '10px' }}
                    >
                        Agregar al carrito
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductCard;

