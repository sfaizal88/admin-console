import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    fromFieldContainer: {
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '10px 10px',
        borderRadius: '8px',
        boxSizing: 'border-box',
        marginBottom: '12px',
        flex: 1,
        border: '1px solid #ecf0f1',
        minHeight: '45px',
        [theme.breakpoints.down('sm')]: {
            padding: '16px 8px',
        }
    },
    label: {
        width: '120px',
        fontSize: '13px',
        fontWeight: 600,
        display: 'inline-flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
        padding: '0 10px',
        [theme.breakpoints.down('sm')]: {
            width: '60px',
            wordBreak: 'break-all',
        }
    },
    value: {
        flex: 1,
        fontSize: '13px',
        color: '#5b5d71',
        display: 'flex',
        alignItems: 'center',
        wordBreak: 'break-all',
    },
    control: {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        '&:hover': {
            color: '#2c3e50'
        }
    }
  }));
  
  export default useStyles;