import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    card: {
      borderRadius: '8px',
      background: '#fff',
      padding: '16px 16px',
      margin: '8px 8px 8px 0',
      width: '400px',
      boxSizing: 'border-box',
      border: '1px solid transparent',
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid #ecf0f1'
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
    }
}));
  
  export default useStyles;