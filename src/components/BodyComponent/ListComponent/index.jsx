import { useStyles } from './List.styles';
import React from 'react';
import { ImageList, ImageListItem, Typography, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ListComponent({ data }) {
    const clasess = useStyles();
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate(`/datails`, { state: item })
    }
    return (
        <div className={clasess.wrapper}>
            {data?.name ? <Typography
                variant="h5"
                style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}
            >{data.name}</Typography> : null}
            {data?.name ? <Typography
                variant="h6"
                style={{ textAlign: 'center', textTransform: 'uppercase' }}
            >• COMPRÁ FÁCIL Y RÁPIDO DESDE CASA • JUGUETES PARA TODAS LAS EDADES</Typography> : null}

            <div className={clasess.listDesktop}>
                <ImageList cols={4} gap={12} >
                    {data?.data?.map((item, index) => (
                        <ImageListItem
                            className={clasess.container}
                            style={{ marginBottom: '2rem' }}
                            onClick={() => handleNavigate(item)}>
                            <img src={item.image} alt="" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                            <Typography
                                key={index}
                                variant="subtitle1"
                                style={{ textAlign: 'center' }}
                            >{item.modelo}</Typography>
                            <Typography
                                key={index}
                                variant="subtitle1"
                                style={{ textAlign: 'center', fontWeight: 'bold' }}
                            >${item.precio}</Typography>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <div className={clasess.listMovil}>
                <ImageList cols={1} >
                    {data?.data?.map((item, index) => (
                        <ImageListItem
                            className={clasess.container}
                            style={{ marginBottom: '2rem' }}
                            onClick={() => handleNavigate(item)}>
                            <img src={item.image} alt="" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                            <Typography
                                key={index}
                                variant="subtitle1"
                                style={{ textAlign: 'center' }}
                            >{item.modelo}</Typography>
                            <Typography
                                key={index}
                                variant="subtitle1"
                                style={{ textAlign: 'center', fontWeight: 'bold' }}
                            >${item.precio}</Typography>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    )
}

export default ListComponent