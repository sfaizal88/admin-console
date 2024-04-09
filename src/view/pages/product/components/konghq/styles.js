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
  },
  rowHeader: {
    display: 'flex',
    flex: 1,
    color: '#e4e2f1',
    background: '#36304a',
    boxSizing: 'border-box',
    borderRadius: ' 4px 4px 0 0',
  },
  rowHeaderTitle: {
    fontSize: '13px',
    fontWeight: 600,
    textTransform: 'uppercase',
    textAlign: 'left',
    padding: '10px 20px',   
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  rowDataHeader: {
    background: '#f6f6f6',
    boxSizing: 'border-box',
    borderBottom: '1px solid #e5e5e5',
    marginBottom: '1px',
  },
  rowData: {
    fontSize: '13px',
    textAlign: 'left',
    padding: '10px 20px',   
    boxSizing: 'border-box',
    wordBreak: 'break-all',
  },
  link: {
      cursor: 'pointer',
      color: '#256dd3',
      '&:hover': {
          textDecoration: 'underline',
      }
  },
  formRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    gap: '12px',
    marginBottom: '24px',
  },
  formFieldlBlock: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 8px',
    background: '#f1f1f1',
    borderRadius: '4px',
  },
  fieldLabel: {
    maxWidth: "fit-content",
    fontSize: "13px",
    marginTop: "-28px",
    fontWeight: "600",
    marginBottom: "11px",
    background: "#f1f1f1",
    padding: "7px 12px 0 12px",
    borderRadius: "4px",
    marginLeft: "8px",
  },
  formTextfield: {
    background: '#fff'
  },
}));
  
  export default useStyles;