/**
 * 
 * Logout useHook component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// UTILS
import * as PATH from '../../../routes/constants';

// CONTEXT
import { useUser, ACTION_TYPE } from '../../../../contexts/userContext'; 

// HOOK
import useRedirect from '../../../../hooks/useRedirect'; 

export function useLogoutHook() {

  // NAVBAR
  const {gotoPage} = useRedirect();
  const { dispatch } = useUser();

  const onLogout = () => {
    dispatch({ type: ACTION_TYPE.CLEAR_USER, payload: {} });
    localStorage.clear();
    gotoPage(PATH.LOGIN_PATH);
  };

  return {
    onLogout
  }
}