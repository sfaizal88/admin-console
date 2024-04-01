import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    errorMessage: {
        fontSize: '14px',
        color: '#c0392b',
        marginTop: '4px'
    },
    errorTextField: {
        border: '1px solid #c0392b',
        color: '#c0392b',
    },
    texfield: {
        background: '#fff'
    }
  }));
  
  export default useStyles;