import { useStyles } from './body.styles'
import React, { useState } from 'react'
import CategoriesComponent from './CategoriesComponent';
import ListComponent from './ListComponent';
import toysGirls from '../../categories/juguetesNiñas.json';

function BodyComponent() {
    const clasess = useStyles();
    const [categorie, setCategorie] = useState(toysGirls[1]);
    return (
        <div className={clasess.container} >
            <CategoriesComponent setCategorie={setCategorie} />
            <ListComponent data={categorie} />
        </div>
    )
}

export default BodyComponent