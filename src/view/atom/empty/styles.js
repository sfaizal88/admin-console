import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    emptyContainer: {
        margin: '70px auto',
        textAlign: 'center'
    },
    iconContainer: {
        color: '#bec3c7',
        fontSize: '60px',
        fontWeight: 500,
        width: '80px',
        height: '80px',
        margin: '0 auto',
        background: '#eff0f6',
        borderRadius: '150px',
        padding: '25px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#bdc3c7',
        fontSize: '21px',
        letterSpacing: '1px',
        fontWeight: 500,
        marginTop: '8px',
    },
    subtitle: {
        fontSize: '11px',
        fontWeight: 500,
        color: '#bdc3c7',
        marginTop: '4px',
    }
  }));
  
  export default useStyles;