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
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

// COMPONENT IMPORT
import Header from '../../common/header';
import {Loader} from '../../../atom';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';
import Auth from '../auth';

// ICON IMPORT
import LogoIcon from '../../../../assets/img/aelf-logo.png';

// UTILS
// import {LOGIN_TOKEN} from '../../../../utils/constants';
import useNotification from '../../../../utils/notification';
// import {FEATURE} from '../../../../utils/feature';

// API
import {LOGIN_API, JSONHeader} from '../../../../api/constants';

// STYLE IMPORT
import useStyles from './styles';

const LoginPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // PARAMS
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const password = queryParams.get('password');
  
  // const { password } = useParams();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();
  const navigate = useNavigate();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState(password || '');

  const onLogin = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(LOGIN_API,{token}, JSONHeader);
      // RESULT 0 -> FAILURE
      // RESULT 1 -> SUCCESS
      if (response.data.result) {
        const responseToken = response.data;
        navigate(PATH.HOME_PATH);
        localStorage.setItem('token', responseToken);
      } else {
        setNotification.error("Invalid login credentials");
      }
      // STATIC CODE WHEN API NOT READY
      /** if (FEATURE.DISABLE_LOGIN_CHECK || token === LOGIN_TOKEN) {
        navigate(PATH.HOME_PATH);
        localStorage.setItem('token', token);
      } else {
        setNotification.error("Invalid login credentials");
      } */
    } catch(error) {
      console.log("Error: ", error);
      setNotification.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    if (!token.trim().length) {
      setNotification.error("Please provide the token to login.");
    } else {
      return true;
    }
    return false;
  };

  const mockLogin = () => {
    console.log("token: ", token)
    localStorage.setItem('token', token);
    navigate(PATH.HOME_PATH);
  }

  const zohoLogin = () => {
    const responseType = 'response_type=code';
    const clientId = 'client_id=1000.EL550QWO3I79EANZ409YGYIOVT838M';
    const redirectUri = 'redirect_uri=https://sfaizal88.github.io/admin-console/';
    const scope = 'scope=ZohoAssist.userapi.READ';
    // Redirect the user to Zoho's authorization URL
    window.location.href = `https://accounts.zoho.com/oauth/v2/auth?${responseType}&${clientId}&${redirectUri}&${scope}`;
  }

  // After successful authentication, Zoho will redirect back to your website with an authorization code
  // You need to handle this code and exchange it for an access token
  const handleAuthorizationCode = () => {
    const url = window.location.href;
    const queryString = url.substring(url.indexOf('?') + 1);
    const params = new URLSearchParams(queryString);
    const code = params.get('code');
    console.log("Code: ",code);
    console.log("url: ", url);
    console.log("params: ", params);
    if (code) {
    // Make a POST request to exchange the code for an access token
    fetch('https://accounts.zoho.com/oauth/v2/token', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
        code: code,
        client_id: '1000.EL550QWO3I79EANZ409YGYIOVT838M',
        client_secret: 'e9f694011af6e2684ceb25526a9cd82c6adb08bdf8',
        redirect_uri: 'https://sfaizal88.github.io/admin-console/',
        grant_type: 'authorization_code'
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response, save the access token, etc.
        console.log('Access Token:', data.access_token);
        // setIsAuthenticated(true);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log("entered")
      // onLogin();
      // mockLogin();
      zohoLogin();
    }
  };

  const contactAdmin = () => {
    setNotification.success("Please contact Steve.");
  }

  // Call the function to exchange authorization code for access token
  // This should be called when the component mounts
  useEffect(() => {
      handleAuthorizationCode();
  }, []);

  return (
    <>
      { isLoading && <Loader/>} 
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
            <TextField type='password' label="Password" variant="outlined" 
            fullWidth placeholder='Please enter the token' value={token} size='small'
            onChange={(event) => setToken(event.target.value)} onKeyDown={handleKeyDown}/>
            <Button variant="contained" fullWidth onClick={onLogin}>Login</Button>
          </Box>
        </Box>
      </Box>
      <Auth/>
    </>
  )
}

export default LoginPage;