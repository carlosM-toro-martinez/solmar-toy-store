import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        flex: 0.2,
        marginRight: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        color: '#FFDAB9',
        '& h4': {
            color: 'black',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '1rem',
            textTransform: 'uppercase',
            fontWeight: 'bold',

        },
        '& h3': {
            color: 'black',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '.8rem',
            textTransform: 'uppercase',
        },
        [mq('md')]: {
            '& h4': {
                fontSize: '1.2rem',
            },
        }
    },
    button: {
        color: 'black',
        textDecoration: 'none',
        textTransform: 'uppercase',
        '&:hover': {
            color: '#C0C0C0',
            cursor: 'pointer',
        },
    },
    img: {
        display: 'flex',
        width: '10rem',

    }
}))