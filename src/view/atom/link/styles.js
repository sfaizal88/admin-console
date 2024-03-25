import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    
    link: {
        cursor: 'pointer',
        color: '#256dd3',
        display: 'inline-block',
        fontSize: '14px',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
        }
    },
  }));
  
  export default useStyles;