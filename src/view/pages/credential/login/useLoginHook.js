/**
 * 
 * Login useHook component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import axios from 'axios';
import {useState} from 'react';

// CONTEXT
import { useUser, ACTION_TYPE } from '../../../../contexts/userContext'; 

// HOOKS
import useRedirect from '../../../../hooks/useRedirect'; 

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// UTILS IMPORT 
import useNotification from '../../../../utils/notification';

// API
import {LOGIN_API, JSONHeader, CLIENT_ID, ALL_ACCOUNTS_API, REDIRECT_URL} from '../../../../api/constants';

// JSON DATA
import AccountData from './data/accounts.json';

export function useLoginHook(setLoading, setUserAccount, setOpenPermissionModal, userAccount) {

    // DECLARE NOTIFICATION
    const setNotification = useNotification();

    // DECLARE  NAVIDATE
    const { dispatch } = useUser();

    // DECLARE STATE
    const [accessToken, setAccessToken] = useState();

    // NAVBAR
    const {gotoPage} = useRedirect();
    
    const onSubmit = (data) => {
      const responseType = 'response_type=code';
      const clientId = `client_id=${CLIENT_ID}`;
      const redirectUri = `redirect_uri=${REDIRECT_URL}`;
      const scope = 'scope=ZohoMail.accounts.READ';
      // Redirect the user to Zoho's authorization URL
      window.location.href = `https://accounts.zoho.com/oauth/v2/auth?${responseType}&${clientId}&${scope}&${redirectUri}`;
    }

    const mockLogin = () => {
      const responseData = AccountData.data[0];
      const auth = '123456qwerty';
      const userData = {
          token: auth,
          displayName: responseData.displayName,
          email: responseData.incomingUserName
      };
      setUserAccount(responseData);
      setOpenPermissionModal(true);
      setAccessToken(auth);
      dispatch({ type: ACTION_TYPE.SET_USER, payload: userData });
    }

    const denyPermission = () => {
      localStorage.clear();
      dispatch({ type: ACTION_TYPE.CLEAR_USER, payload: {} });
      setUserAccount({});
      setOpenPermissionModal(false);
      gotoPage(PATH.LOGIN_PATH);
    }

    const allowPermission = () => {
      // SETUP DISPLAY NAME AND AUTH
      localStorage.setItem('displayName', userAccount.displayName);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('email', userAccount.incomingUserName);
      const userData = {
          token: accessToken,
          displayName: userAccount.displayName,
          email: userAccount.incomingUserName
      };
      setOpenPermissionModal(false);
      dispatch({ type: ACTION_TYPE.SET_USER, payload: userData });
      gotoPage(PATH.HOME_PATH);
    }

    // After successful authentication, Zoho will redirect back to your website with an authorization code
    // You need to handle this code and exchange it for an access token
    const handleAuthorizationCode = async () => {
        const url = window.location.href;
        const queryString = url.substring(url.indexOf('?') + 1);
        const params = new URLSearchParams(queryString);
        const code = params.get('code');
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
                const accountResponse = await axios.post(ALL_ACCOUNTS_API, {authToken: response.data.access_token}, JSONHeader);
                if (accountResponse.data) {
                  if (accountResponse.data?.data?.[0].accountName === 'aelf') {
                  setUserAccount(accountResponse.data.data[0]);
                  setOpenPermissionModal(true);
                  setAccessToken(response.data.access_token);
                  } else {
                    setNotification.error('Only AELF account allowed');
                  }
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
              setTimeout(() => setLoading(false), 2000);
            }
        }
    };

  return {
    onSubmit,
    handleAuthorizationCode,
    mockLogin,
    allowPermission,
    denyPermission
  }
}