/**
 * 
 * Login useHook component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import axios from 'axios';

// CONTEXT
import { useUser, ACTION_TYPE } from '../../../../contexts/userContext'; 

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// UTILS IMPORT 
import useNotification from '../../../../utils/notification';

// API
import {LOGIN_API, JSONHeader, CLIENT_ID, ALL_ACCOUNTS_API, REDIRECT_URL} from '../../../../api/constants';

export function useLoginHook(setLoading) {

    // DECLARE NOTIFICATION
    const setNotification = useNotification();

    // DECLARE  NAVIDATE
    const { dispatch } = useUser();

    const onSubmit = (data) => {
      console.log(data);
      const responseType = 'response_type=code';
      const clientId = `client_id=${CLIENT_ID}`;
      const redirectUri = `redirect_uri=${REDIRECT_URL}`;
      const scope = 'scope=ZohoMail.accounts.READ';
      // Redirect the user to Zoho's authorization URL
      window.location.href = `https://accounts.zoho.com/oauth/v2/auth?${responseType}&${clientId}&${scope}&${redirectUri}`;
    }

    const setStorage = (auth, responseData) => {
        // SETUP DISPLAY NAME AND AUTH
        localStorage.setItem('displayName', responseData.data[0].displayName);
        localStorage.setItem('token', auth);
        localStorage.setItem('email', responseData.data[0].incomingUserName);
        const userData = {
            token: auth,
            displayName: responseData.data[0].displayName,
            email: responseData.data[0].incomingUserName
        };
        dispatch({ type: ACTION_TYPE.SET_USER, payload: userData });
        console.log(`${window.location.href.split('?')[0]}/#${PATH.HOME_PATH}`);
        window.location.href = `${window.location.href.split('?')[0]}/#${PATH.HOME_PATH}`;
    }

    // After successful authentication, Zoho will redirect back to your website with an authorization code
    // You need to handle this code and exchange it for an access token
    const handleAuthorizationCode = async () => {
        const url = window.location.href;
        const queryString = url.substring(url.indexOf('?') + 1);
        const params = new URLSearchParams(queryString);
        const code = params.get('code');
        console.log("Code: ",code);
        if (code) {
            setLoading(true);
            // Make a POST request to exchange the code for an access token
            const param = {
                code: code,
                redirect_uri: REDIRECT_URL,
                grant_type: 'authorization_code',
                scope: 'ZohoMail.accounts.READ'
            };
            try {
              const response = await axios.post(LOGIN_API, {...param}, JSONHeader);
              if (response.data) {
                console.log('Auth details: ', response.data);
                const accountResponse = await axios.post(ALL_ACCOUNTS_API, {authToken: response.data.access_token}, JSONHeader);
                console.log('Account details: ', accountResponse);
                if (accountResponse.data) {
                  console.log('Account details: ', accountResponse.data);
                  setStorage(response.data.access_token, accountResponse.data);
                } else {
                  setNotification.error();
                }
              } else {
                setNotification.error();
              }
            } catch (error) {
              console.log("Error: ", error);
              setNotification.error();
            } finally {
              setLoading(false);
            }
        }
    };

  return {
    onSubmit,
    handleAuthorizationCode,
  }
}