import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 550,
        background: '#fff',
        padding: '20px 16px 20px 16px',
        borderRadius: '8px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 300,
        }
    },
    icon: {
        fontSize: '48px',
        color: '#256dd3'
    },
    modalTitle: {
        fontSize: '24px',
        fontWeight: 500,
        margin: '8px 0'
    },
    modalFooter: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 15px',
        background: '#fff',
        gap: '12px',
        marginTop: '16px'
    },
    btn: {
        [theme.breakpoints.down('sm')]: {
            flex: 1,
        }
    },
    modalSubtitle: {
        padding: '8px 15px',
        marginTop: '8px',
        color: '#7f7a8a'
    },
}));
  
export default useStyles;