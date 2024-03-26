import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      borderRadius: '8px',
      background: '#fff',
      padding: '16px 16px',
      margin: '8px 8px 8px 0',
      width: '400px',
      boxSizing: 'border-box',
      border: '1px solid transparent',
      display: 'inline-block',
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid #ecf0f1'
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    },
    cardTitleContainer: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      marginBottom: '8px'
    },
    cardLogo: {
      width: '55px'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '4px'
    },
    cardInfo: {
      fontSize: '14px',
      color: '#5b5d71'
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '4px 0 0 0'
    },
    cardDisabled: {
      position: 'relative'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      '&:hover': {
        cursor: 'not-allowed',
        border: '1px solid #transparent'
      }
    }
}));
  
  export default useStyles;