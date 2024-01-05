import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1.5rem'
    },
    button: {
        color: 'black',
        textDecoration: 'none',
        textTransform: 'uppercase'
    },
    img: {
        display: 'flex',
        width: '20rem',

    }
}))