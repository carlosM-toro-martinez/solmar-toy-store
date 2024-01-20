import { Button } from '@mui/material';
import { useStyles } from './NavBar.styles'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import { Paper } from '@material-ui/core';

function NavBarComponent() {
    const clasess = useStyles();
    return (
        <Paper style={{ width: '100%' }} elevation={3} >
            <div className={clasess.wrapper} >
                <div className={clasess.containerLog} >

                    <img src={Logo} alt="logo" className={clasess.img} />
                </div>
                <div className={clasess.container} >
                    <Link to="/" className={clasess.button}>
                        Catálogo
                    </Link>
                    <Link to="/contact" className={clasess.button}>
                        Contactos
                    </Link>
                    <Link to="/quienes-somos" className={clasess.button}>
                        Quienes Somos
                    </Link>
                </div>
            </div>
        </Paper>
    )
}

export default NavBarComponent