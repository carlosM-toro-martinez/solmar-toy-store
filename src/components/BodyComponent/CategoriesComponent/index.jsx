import { Typography } from '@mui/material';
import { useStyles } from './Categories.styles';
import React from 'react';
import { Link } from 'react-router-dom';
import toysBoys from '../../../categories/juguetesNiños.json';
import toysGirls from '../../../categories/juguetesNiñas.json';

function CategoriesComponent({ setCategorie }) {
    const clasess = useStyles();
    const handleCategorieBoys = (index) => {
        setCategorie(toysBoys[index]);
    }
    const handleCategorieGirls = (index) => {
        console.log(index);
        setCategorie(toysGirls[index]);
    }

    return (
        <div className={clasess.container} >
            <Typography variant='h4' >Categorias</Typography>
            <Typography variant='h4' >Niños</Typography>
            {toysBoys.map((toy, index) => (
                <Typography
                    variant='h3'
                    key={index}
                    className={clasess.button}
                    onClick={() => handleCategorieBoys(index)} >{toy.name}</Typography>
            ))}
            <Typography variant='h4' >Niñas</Typography>
            {toysGirls.map((toy, index) => (
                <Typography
                    variant='h3'
                    key={index}
                    className={clasess.button}
                    onClick={() => handleCategorieGirls(index)} >{toy.name}</Typography>
            ))}
        </div>
    )
}

export default CategoriesComponent