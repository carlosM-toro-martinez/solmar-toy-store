import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingBottom: '2rem'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
        color: '#FFDAB9',
        '& h4': {
            color: 'black',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',

        },
        [mq('md')]: {
            '& h4': {
                fontSize: '4rem',
            },
        }
    },
    containerLog: {
        display: 'flex',
        justifyContent: 'space-around',
        color: '#FFDAB9',
        '& h4': {
            color: 'black',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',

        },
        [mq('md')]: {
            '& h4': {
                fontSize: '4rem',
            },
        }
    },
    button: {
        color: 'black',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    img: {
        display: 'flex',
        width: '10rem',

    }
}))