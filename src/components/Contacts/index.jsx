import React from 'react';
import { IconButton, Grid, Typography, Container, Divider } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';

function Contacts() {
    const abrirEnNuevaPestana = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <IconButton onClick={() => abrirEnNuevaPestana('https://wa.me/59174281211')}>
                            <WhatsAppIcon />
                            <Typography>+591 74281211</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton onClick={() => abrirEnNuevaPestana('https://www.facebook.com/profile.php?id=61554999493779')}>
                            <FacebookIcon />
                            <Typography>Juguetería Solmar</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton>
                            <PhoneIcon />
                            <Typography>+591 74281211</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton onClick={() => abrirEnNuevaPestana('mailto:jugueteriasolmar@gmail.com')}>
                            <EmailIcon />
                            <Typography>jugueteriasolmar@gmail.com</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <IconButton onClick={() => abrirEnNuevaPestana('https://www.google.com/maps/place/Bolivar+925,+Villa+Imperial+de+Potos%C3%AD/@-19.5875269,-65.7522012,21z/data=!4m6!3m5!1s0x93f94e7061e5e4d9:0x3209997317d3a498!8m2!3d-19.5874698!4d-65.7520111!16s%2Fg%2F11tnbgmfpn?entry=ttu')}>
                            <RoomIcon />
                            <Typography>Calle bolivar esquina simon chacon s/n</Typography>
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider style={{ margin: '20px 0' }} />
            </Container>
            <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Typography>Envíos GRATIS a todo el PAÍS en compras mayores a 300Bs • Envíos GRATIS en Junín (BA)</Typography>
                        <Divider orientation="vertical" style={{ margin: '0 10px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>PAGÁ COMO QUIERAS Pago por QR, Tarjetas de crédito, débito, transferencia y más!</Typography>
                        <Divider orientation="vertical" style={{ margin: '0 10px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>COMPRÁ CON SEGURIDAD Tus datos siempre protegidos</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Contacts