import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      borderRadius: '4px',
      marginBottom: '8px',
      background: '#fff',
      '&:hover': {
        boxShadow: '0 0 5px #bdc3c7'
      }
    },
    headContainer: {
      padding: '6px',
      borderRadius: '4px',
      display: 'flex',
      flex: 1,
      boxSizing: 'border-box',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
    },
    method: {
      borderRadius: '3px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 700,
      minWidth: '80px',
      padding: '6px 0',
      textAlign: 'center',
    },
    url: {
      fontFamily: 'monospace',
      fontSize: '16px',
      fontWeight: 600,
      padding: '0 10px',
      wordBreak: 'break-word',
    },
    info: {
      color: '#3b4151',
      fontSize: '13px',
      wordBreak: 'break-word',
      flex: 1,
    },
    arrow: {
      width: '30px',
      cursor: 'pointer'
    },
    detailsContainer: {
      padding: '12px 16px 16px 16px',
      borderRadius: '0 0 4px 4px'
    },
    paramContainer: {
      display: 'flex',
      flex: 1,
      boxSizing: 'border-box',
      gap: '16px',
    },
    paramItem: {
      flex: 1,
    },
    paramTitleContainer: {
      display: 'flex',
      flex: 1,
      alignItems: 'center'
    },
    paramTitle: {
      fontSize: '14px',
      fontWeight: 600,
      flex: 1,
    },
    paramBox: {
      border: '1px solid #dedede',
      padding: '8px',
      borderRadius: '4px',
    },
    code: {

    },
    control: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0 4px 8px 4px',
    }
}));
  
  export default useStyles;