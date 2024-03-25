import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    fromFieldContainer: {
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '16px 24px',
        borderRadius: '8px',
        boxSizing: 'border-box',
        marginBottom: '16px',
        flex: 1,
        border: '1px solid #ecf0f1',
        minHeight: '55px'
    },
    label: {
        width: '120px',
        fontSize: '15px',
        fontWeight: 600,
        display: 'inline-flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
        padding: '0 16px'
    },
    value: {
        flex: 1,
        fontSize: '15px',
        color: '#5b5d71',
        display: 'flex',
        alignItems: 'center',
        flex: 1
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