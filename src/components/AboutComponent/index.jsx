import { useStyles } from './about.styles';
import React from 'react';
import Logo from '../assets/images/logo.png'
import { Typography } from '@mui/material';

function BodyComponent() {
    const clasess = useStyles();
    return (
        <div className={clasess.container} >
            <div className={clasess.containerLog} >

                <img src={Logo} alt="logo" className={clasess.img} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    Somos un e-commerce familiar dedicado a ofrecer una amplia variedad de juegos y juguetes para todas las edades. Desde nuestra tienda en línea, te invitamos a vivir la experiencia única de comprar de manera sencilla, fácil y rápida. Nos enorgullece ser tu opción de confianza para encontrar el regalo perfecto.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    En Solmar Juguetería, la diversión está garantizada. Trabajamos con todos los medios de pago para brindarte la máxima comodidad en tus compras. Realizamos envíos a todo el país, llevando la alegría de nuestros juguetes a cada rincón. Cada pedido que recibimos es una oportunidad para sorprenderte y hacer que tu experiencia de compra sea inolvidable.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    Nuestra pasión por los juegos y juguetes se refleja en la calidad de nuestro catálogo. Desde clásicos atemporales hasta las últimas novedades, ofrecemos una selección que se adapta a todos los gustos y preferencias. ¿Estás buscando el regalo perfecto? En Solmar Juguetería, cada compra es más que una transacción; es una grata sorpresa y la oportunidad de llevar la magia a un nuevo destino. ¡Vive la experiencia Solmar Juguetería y descubre el mundo del juego con nosotros!
                </Typography>
            </div>
        </div>
    )
}

export default BodyComponent