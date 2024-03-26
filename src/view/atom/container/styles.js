import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        boxSizing: 'border-box',
        padding: '19px 25px 20px 25px', // '24px 36px',
        // background: '#fff',
        minHeight: '96%',
        // borderRadius: '8px',
        // boxShadow: '1px 1px 2px #d0d0d0',
        [theme.breakpoints.down('sm')]: {
            padding: '8px 0',
        }
    },
  }));
  
  export default useStyles;