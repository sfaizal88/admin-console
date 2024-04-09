import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        boxShadow: 24,
        borderRadius: '8px'
    },
    modalSmall: {
        width: 540,
        borderRadius: '8px',
        [theme.breakpoints.down('sm')]: {
            width: 300,
        }
    },
    modalMedium: {
        minWidth: 700,
        borderRadius: '8px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '100%',
        }
    },
    modalLarge: {
        width: '90%',
        boxSizing: 'border-box',
        margin: '0 auto',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        transform: 'none',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderRadius: '8px',
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            margin: 0,
            width: '100%',
            boxSizing: 'border-box',
        }
    },
    modalHeader: {
        padding: '18px 15px',
        borderBottom: '1px solid #ecf0f1',
        background: '#fff',
        borderRadius: '8px 8px 0 0'
    },
    modalTitle: {
        fontSize: '17px',
        fontWeight: 600,
    },
    modalFooter: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 15px',
        borderTop: '1px solid #ecf0f1',
        background: '#fff',
        gap: '12px',
        borderRadius: '0 0 8px 8px'
    },
    btn: {
        [theme.breakpoints.down('sm')]: {
            flex: 1,
        }
    },
    modalMediumContent: {
        padding: '16px 15px',
        minHeight: 300,
        mAXHeight: 500,
        overflow: 'scroll',
    },
    modalLargeContent: {
        padding: '16px 15px',
        overflow: 'scroll',
        height: 'auto',
        flex: 1
    },
    modalSmallContent: {
        maxHeight: 130,
        display: 'flex',
        alignItems: 'center',
        padding: '8px 15px',
        flex: 1,
        justifyContent: 'center'
    },
}));
  
export default useStyles;