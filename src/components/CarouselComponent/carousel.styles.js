import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    swiper: {
        marginTop: '1rem',
        marginBottom: '2rem',
        width: '100%',
        height: '20rem',
        [mq('md')]: {
            marginBottom: '5rem',
            height: '30rem',
            width: '90%',
        }
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
        height: '20rem',
        [mq('md')]: {
            height: '30rem',
        },
        objectFit: 'cover',
    },
}))