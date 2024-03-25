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

// UTILS
import useNotification from '../../../../utils/notification';

// API
import {LOGIN_API, JSONHeader, CLIENT_ID, ALL_ACCOUNTS_API, REDIRECT_URL} from '../../../../api/constants';

// JSON
import AccountDataJSON from './data/accounts.json';

export function useLoginHook(setLoading) {

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
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

    const setStorage = (auth) => {
        const response = {
            data: AccountDataJSON
        }
        // SETUP DISPLAY NAME AND AUTH
        localStorage.setItem('displayName', response.data.data[0].displayName);
        localStorage.setItem('token', auth);
        localStorage.setItem('email', response.data.data[0].incomingUserName);
        const userData = {
            token: auth,
            displayName: response.data.data[0].displayName,
            email: response.data.data[0].incomingUserName
        };
        dispatch({ type: ACTION_TYPE.SET_USER, payload: userData });
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
                // client_id: CLIENT_ID,
                // client_secret: CLIENT_SECRET,
                redirect_uri: REDIRECT_URL,
                grant_type: 'authorization_code',
                scope: 'ZohoMail.accounts.READ'
            };
            try {
                const response = await axios.post(LOGIN_API, {...param}, JSONHeader);
                if (response.data) {
                console.log('response: ', response.data);
                getAccountDetails(response.data.access_token)
                }
            } catch (error) {
                console.log("Error: ", error);
                // setLoading(false);
                // setStorage('abc');
            }
        }
    };

    const getAccountDetails = async (auth) => {
        try {
          const param = {
            authToken: auth
          }
          const response = await axios.post(ALL_ACCOUNTS_API, {...param}, JSONHeader);
          if (response.data) {
            console.log('response accounts: ', response.data);
          }
        } catch (error) {
          console.log("Error: ", error);
          // setLoading(false);
          setStorage(auth);
        } finally {
          setLoading(false);
        }
    }
    
    const contactAdmin = () => {
        setNotification.success("Please contact Steve.");
    }

  return {
    onSubmit,
    handleAuthorizationCode,
    contactAdmin
  }
}