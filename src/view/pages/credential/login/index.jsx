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
// import { yupResolver } from "@hookform/resolvers/yup"

// COMPONENT IMPORT
import Header from '../../common/header';
import {DarkLoader} from '../../../atom';

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    /* defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema), */
  });

  // Hook
  const {onSubmit, handleAuthorizationCode} = useLoginHook(setLoading);

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
            <Box><img src={AdminPanelIcon} width={80}/></Box>
          </Box>
          <Button variant="contained" fullWidth type="submit">Login using Zoho email</Button>
        </Box>
      </Box>
      <Auth/>
    </form>
  )
}

export default LoginPage;

// <TextField label="Email" placeholder='Please enter the email' name='email' {...{errors, register}}/>