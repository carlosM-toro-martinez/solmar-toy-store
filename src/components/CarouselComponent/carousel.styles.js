import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    swiper: {
        marginTop: '1rem',
        marginBottom: '5rem',
        width: '90%',
        height: '30rem',
    },
    swiperSlide: {
        textAlign: 'center',
        fontSize: '18px',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiperSlideImage: {
        display: 'block',
        width: '100%',
        height: '30rem',
        objectFit: 'cover',
    },
}))