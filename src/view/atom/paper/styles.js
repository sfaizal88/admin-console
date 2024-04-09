import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: { 
        background: '#fff',
        border: '1px solid #ebebeb',
        borderRadius: '8px',
        padding: '24px 24px 24px 24px',
        marginTop: '32px',
        position: 'relative'
    },
    titleContainer: {
        position: 'absolute',
        top: '-17px',
        left: '16px',
        fontSize: '13px',
        fontWeight: 600,
        background: '#fff',
        display: 'inline-flex',
        padding: '8px 16px 8px 16px',
        borderRadius: '100px',
        border: '1px solid #ebebeb',
        textTransform: 'uppercase',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px'
    }
  }));
  
  export default useStyles;