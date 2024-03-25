/**
 * 
 * Login Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {Box, TextField, Button} from '@mui/material';

// COMPONENT IMPORT
import Header from '../../common/header';
import {DarkLoader} from '../../../atom';

// ROUTER IMPORT
import Auth from '../auth';

// ICON IMPORT
import LogoIcon from '../../../../assets/img/aelf-logo.png';

// HOOK
import {useLoginHook} from './useLoginHook';

// STYLE IMPORT
import useStyles from './styles';

const LoginPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState();

  // Hook
  const {zohoLogin, handleAuthorizationCode, handleKeyDown, contactAdmin} = useLoginHook(email, setLoading);


  // Call the function to exchange authorization code for access token
  // This should be called when the component mounts
  useEffect(() => {
      handleAuthorizationCode();
  }, []);

  if (isLoading) return <DarkLoader/>

  return (
    <>
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
            <TextField label="Email" variant="outlined" 
            fullWidth placeholder='Please enter the email' value={email} size='small'
            onChange={(event) => setEmail(event.target.value)} onKeyDown={handleKeyDown}/>
            <Button variant="contained" fullWidth onClick={zohoLogin}>Login</Button>
          </Box>
        </Box>
      </Box>
      <Auth/>
    </>
  )
}

export default LoginPage;