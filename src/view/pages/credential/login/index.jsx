/**
 * 
 * Login Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {Box, Button} from '@mui/material';
import { useForm } from "react-hook-form";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
// import { yupResolver } from "@hookform/resolvers/yup"

// COMPONENT IMPORT
import Header from '../../common/header';
import {DarkLoader, ConfirmModal} from '../../../atom';

// ROUTER IMPORT
import Auth from '../auth';

// ICON IMPORT
import AdminPanelIcon from '../../../../assets/img/admin-panel.png';

// HOOK
import {useLoginHook} from './useLoginHook';
// import {schema} from './schema';

// STYLE IMPORT
import useStyles from './styles';

const LoginPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userAccount, setUserAccount] = useState({});
  const [isOpenPermissionModal, setOpenPermissionModal] = useState(false);
  const {
    handleSubmit,
    formState: { errors }
  } = useForm({});

  // Hook
  const {onSubmit, handleAuthorizationCode, allowPermission, denyPermission} = useLoginHook(
    setLoading, 
    setUserAccount, 
    setOpenPermissionModal, 
    userAccount
  );

  // Call the function to exchange authorization code for access token
  // This should be called when the component mounts
  useEffect(() => {
    if (!formSubmitted) {
      setFormSubmitted(true);
      handleAuthorizationCode();
    }
  }, []);

  if (isLoading) return <DarkLoader/>

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box className={classes.onlyDesktop}><Header/></Box>
      <Box className={classes.container}>
        <Box className={classes.loginBox}>
          <Box>
            <Box className={classes.title1}>Welcome to</Box>
            <Box className={classes.title2}>AELF Admin Panel</Box>
            <Box className={classes.subTitle}>Please sign in using your Zoho self-company email ID for access. For assistance, contact support. Stay productive!</Box>
            <Box my={2}><img src={AdminPanelIcon} width={80}/></Box>
          </Box>
          <Button className={classes.btn} startIcon={<MailOutlinedIcon/>} variant="contained" fullWidth type="submit">Login using Zoho email</Button>
        </Box>
      </Box>
      <Auth/>
      {isOpenPermissionModal && <ConfirmModal
      title='Permission Request'
      content={<><Box mb={1}>You've successfully logged in using your <strong>{userAccount.mailboxAddress}</strong> zoho account. 
      We'd like to request your permission to access basic information from your Zoho account. 
      We will use this information solely to enhance your experience on our website and provide personalized services. </Box>
      <Box>Please note that we respect your privacy, and your information will be handled securely and in accordance with our privacy policy.
      If you're comfortable granting us permission, please click the "Proceed" button below. If not, you can choose to 'log off' from here.</Box></>}
      yesLabel='Proceed'
      noLabel='Log off'
      onClickNo={() => denyPermission()}
      onClickYes={() => allowPermission()}
      />}
    </form>
  )
}

export default LoginPage;