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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    Misión:
                    En Juguetería Sol - Mar, nos dedicamos a brindar momentos de alegría y diversión a las familias potosinas, ofreciendo una amplia variedad de juguetes de alta calidad que estimulan el aprendizaje y el entretenimiento. Nos comprometemos a proporcionar un servicio excepcional y a ser el destino preferido para la comunidad, creando recuerdos inolvidables a través de experiencias de juego significativas.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    Visión:
                    Nos visualizamos como la juguetería líder en la ciudad de Potosí, reconocida por ofrecer la mejor selección de juguetes innovadores y educativos. Aspiramos a ser el referente en el mercado local, destacándonos por nuestra excelencia en el servicio al cliente, contribuyendo al desarrollo integral de los niños y siendo reconocidos como líderes en el rubro juguetero en el tiempo.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    Objetivos:
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    -	Establecer canales efectivos de comunicación para proporcionar información detallada y precisa sobre productos, promociones y servicios, asegurando una experiencia informada y satisfactoria para cada cliente.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    -	Brindar un servicio al cliente excepcional que supere las expectativas, fomentando relaciones duraderas y positivas.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    -	Ofrecer una amplia gama de juguetes de alta calidad, innovadores y educativos que satisfagan las preferencias y necesidades de nuestros clientes.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    -	Convertirnos en la juguetería más elegida por la población potosina, consolidando nuestra posición como líderes en el mercado local.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    -	Proporcionar juguetes que promuevan el desarrollo integral de los niños, estimulando su creatividad, habilidades cognitivas y sociales.
                </Typography>
                {/* <Typography variant='h5' style={{ fontSize: '1.2rem' }} >
                    Nuestra pasión por los juegos y juguetes se refleja en la calidad de nuestro catálogo. Desde clásicos atemporales hasta las últimas novedades, ofrecemos una selección que se adapta a todos los gustos y preferencias. ¿Estás buscando el regalo perfecto? En Solmar Juguetería, cada compra es más que una transacción; es una grata sorpresa y la oportunidad de llevar la magia a un nuevo destino. ¡Vive la experiencia Solmar Juguetería y descubre el mundo del juego con nosotros!
                </Typography> */}
            </div>
        </div>
    )
}

export default BodyComponent