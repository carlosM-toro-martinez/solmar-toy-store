import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    wrapper: {
        '& h5': {
            fontSize: '1.5rem',
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
    }
}))