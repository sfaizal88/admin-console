import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        background: '#256dd3',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    loginBox: {
        marginTop: '-120px',
        width: 300,
        border: '1px solid #fff',
        padding: '24px',
        borderRadius: '8px',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            marginTop: '-30%',
        }
    },
    onlyDesktop: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    title1: {
        fontSize: '18px',
        fontWeight: 600
    },
    title2: {
        fontSize: '20px',
        fontWeight: 600,
        color: '#256dd3',
        marginBottom: '16px'
    },
    subTitle: {
        fontSize: '13px',
        fontWeight: 400,
        marginTop: '4px',
        marginBottom: '16px'
    },
    loginContent: {
        flex: 1,
        color: '#fff',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }
    },
    link: {
        cursor: 'pointer',
        color: '#256dd3',
        display: 'inline-block',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
        }
    },
}));
  
export default useStyles;