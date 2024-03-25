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
import { yupResolver } from "@hookform/resolvers/yup"

// COMPONENT IMPORT
import Header from '../../common/header';
import {DarkLoader, TextField} from '../../../atom';

// ROUTER IMPORT
import Auth from '../auth';

// ICON IMPORT
import LogoIcon from '../../../../assets/img/aelf-logo.png';

// HOOK
import {useLoginHook} from './useLoginHook';
import {schema} from './schema';

// STYLE IMPORT
import useStyles from './styles';

const LoginPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  // Hook
  const {onSubmit, handleAuthorizationCode, contactAdmin} = useLoginHook(setLoading);

  // Call the function to exchange authorization code for access token
  // This should be called when the component mounts
  useEffect(() => {
      handleAuthorizationCode();
  }, []);

  if (isLoading) return <DarkLoader/>

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box className={classes.onlyDesktop}><Header/></Box>
      <Box className={classes.container}>
        <Box className={classes.loginContainer}>
          <Box className={classes.loginContent}>
            <Box className={classes.title}>
            <img src={LogoIcon} alt="Logo" height={30}/>&nbsp;Traits Experiment</Box>
            <Box className={classes.subtitle}>We make digital product that drive you to stand out.</Box>
            <Box className={classes.info}>We write code to create NFT by interacting with artificial intelligence using different traits.</Box>
          </Box>
          <Box className={classes.loginBox}>
            <Box>
              <Box className={classes.loginTitle}>Login</Box>
              <Box className={classes.loginSubTitle}>Don&apos;t have an account? Please contact our <Box className={classes.link} onClick={contactAdmin}>admin team</Box></Box>
            </Box>

            <TextField label="Email" placeholder='Please enter the email' name='email' {...{errors, register}}/>
            <Button variant="contained" fullWidth type="submit">Login</Button>
          </Box>
        </Box>
      </Box>
      <Auth/>
    </form>
  )
}

export default LoginPage;