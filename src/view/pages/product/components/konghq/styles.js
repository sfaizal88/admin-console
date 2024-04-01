import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    textTransform: 'none !important',
    fontWeight: '600 !important',
    display: 'inline-flex',
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    }
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '16px',
    gap: '8px'
  },
  row: {
    marginTop: '1px !important',
  }
}));
  
  export default useStyles;