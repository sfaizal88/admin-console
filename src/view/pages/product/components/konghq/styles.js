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
    marginBottom: '8px',
    display: 'flex',
    gap: '8px',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  rowField: {
    width: 250
  },
  rowValue: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
      marginBottom: '10px',
    }
  },
  formControl: {
    display: 'flex !important', 
    flexDirection: 'row !important',
    justifyContent: 'flex-start',
    gap: '16px',
    alignItems: 'center',
  }
}));
  
  export default useStyles;