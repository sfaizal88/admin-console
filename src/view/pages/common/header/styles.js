import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '16px 25px 17px 20px',
    background: '#145cc2',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  pageHeaderContainer: {
    padding: '16px 24px',
    background: '#fff',
    boxShadow: '0 1px 0 #eeeeee',
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        padding: '16px 8px',
    }
  },
  pageHeaderTitle: {
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '4px',
  },
  pageHeaderSubtitle: {
    fontSize: '14px',
    color: '#5b5d71',
  },
  internalHeader: {
    border: '1px solid #f2f2f2',
    background: '#ecf0f1',
    boxSizing: 'border-box',
    padding: '16px 24px 16px 24px',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '15px',
    boxShadow: '0 1px 2px #d2d2d2',
    zIndex: 2,
    borderBottom: '1px solid #ececec',
    [theme.breakpoints.down('sm')]: {
        marginTop: '10px',
    }
  },
  logout: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    gap: '8px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
  },
  user: {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: '8px',
    fontWeight: 600
  }
}));
  
export default useStyles;