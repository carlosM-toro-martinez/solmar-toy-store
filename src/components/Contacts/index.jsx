import React from 'react';
import { IconButton, Grid, Typography, Container, Divider } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contacts() {
    const abrirEnNuevaPestana = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <IconButton onClick={() => abrirEnNuevaPestana('https://api.whatsapp.com')}>
                            <WhatsAppIcon />
                            <Typography>+591 78732181</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton onClick={() => abrirEnNuevaPestana('https://www.facebook.com')}>
                            <FacebookIcon />
                            <Typography>Solmar jugueteria</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton onClick={() => abrirEnNuevaPestana('tel:+123456789')}>
                            <PhoneIcon />
                            <Typography>+591 78732181</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton onClick={() => abrirEnNuevaPestana('mailto:correo@example.com')}>
                            <EmailIcon />
                            <Typography>solmar_jugueteria@gmail.com</Typography>
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider style={{ margin: '20px 0' }} />
            </Container>
            <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Typography>Envíos GRATIS a todo el PAÍS en compras mayores a $50.000 • Envíos GRATIS en Junín (BA)</Typography>
                        <Divider orientation="vertical" style={{ margin: '0 10px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>PAGÁ COMO QUIERAS Mercado Pago, GoCuotas, Wibond, Tarjetas de crédito, débito, transferencia y más!</Typography>
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