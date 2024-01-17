import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    wrapper: {
        flex: 0.9,
        display: 'flex',
        flexDirection: 'column',
        '& h5': {
            fontSize: '1.5rem',
        },
        '& h6': {
            fontSize: '0.8rem',
        },
        [mq('md')]: {
            '& h6': {
                fontSize: '1.5rem',
            },
        }
    },
    container: {
        height: '550px',
        width: '100%',
        objectFit: 'cover',
        '&:hover': {
            cursor: 'pointer'
        },
        [mq('md')]: {
            '& h4': {
                fontSize: '1.5rem',
            },
        }
    },
    listDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
        }
    },
    listMovil: {
        display: 'flex',
        [mq('md')]: {
            display: 'none',
        }
    }
}))